
import { Passport } from 'passport';
import * as PassportLocal from 'passport-local';
import * as PassportJwt from 'passport-jwt';

import CONFIG from './config';
import { UserController } from './controllers/user/user-controller';

class AuthenticationPassport {
	userController: UserController;

	public passport: any;
	private localLogin: PassportLocal.Strategy;
	private jwtLogin: PassportJwt.Strategy;
	private localOptions: any;
	private jwtOptions: any;

	constructor() {
		this.userController = new UserController();
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
			let res = await this.userController.read({ 'email': email });
			let user = res[0];

			if (!user) {
				return done(null, false, { message: 'Login failed. Please try again.' });
			}

			let isMatch = await user.comparePassword(password);
			if (!isMatch) {
				return done(null, false, { message: 'Login failed. Please try again.' });
			}
			return done(null, user);
		});

		this.jwtLogin = new PassportJwt.Strategy(this.jwtOptions, async (JwtPayLoad, done) => {

			let res = await this.userController.read({ 'id': JwtPayLoad.id });
			let user = res[0];

			if (user) {
				done(null, user);
			} else {
				done(null, false);
			}

		});

		this.passport.use(this.jwtLogin);
		this.passport.use(this.localLogin);
	}
}

const authenticationPassport = new AuthenticationPassport().passport;
export default authenticationPassport;