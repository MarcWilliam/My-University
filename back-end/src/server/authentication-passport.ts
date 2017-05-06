
import { Passport } from 'passport';
import * as PassportLocal from 'passport-local';
import * as PassportJwt from 'passport-jwt';

import CONFIG from '../config';
import { UserController } from '../controllers/user/user-controller';
import { User } from '../models/user/user';

class AuthenticationPassport {

	public passport: any;
	private localLogin: PassportLocal.Strategy;
	private jwtLogin: PassportJwt.Strategy;
	private localOptions: any;
	private jwtOptions: any;

	constructor() {

		this.passport = new Passport();

		this.localOptions = {
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true,
			session: false
		};

		this.jwtOptions = {
			jwtFromRequest: PassportJwt.ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
			secretOrKey: CONFIG.AUTH.SECRET,
		};

		this.localLogin = new PassportLocal.Strategy(this.localOptions, async (req, email, password, done) => {
			let user = await User.Login(email, password);
			return user ?
				done(null, user) :
				done(null, false, { message: 'Login failed. Please try again.' });
		});

		this.jwtLogin = new PassportJwt.Strategy(this.jwtOptions, async (JwtPayLoad, done) => {
			let user = await User.Read({ id: JwtPayLoad.id })[0];
			return user ? done(null, user) : done(null, false);
		});

		this.passport.use(this.jwtLogin);
		this.passport.use(this.localLogin);
	}
}

const authenticationPassport = new AuthenticationPassport().passport;
export default authenticationPassport;