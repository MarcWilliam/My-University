
import { Passport } from 'passport';
import * as PassportLocal from 'passport-local';
import * as PassportJwt from 'passport-jwt';

import CONFIG from '../config';

PassportJwt.ExtractJwt;

class AuthenticationPassport {
	public passport: any;
	private localLogin: PassportLocal.Strategy;
	private jwtLogin: PassportJwt.Strategy;
	private localOptions: any;
	private jwtOptions: any;

	constructor() {

		this.passport = new Passport();

		this.localLogin = new PassportLocal.Strategy(
			this.localOptions, async function (email, password, done) {
				// login logic goes here ====> await userController.login()
			});

		this.jwtLogin = new PassportJwt.Strategy(this.jwtOptions,
			async function (payload, done) {
				// login logic goes here ====>
				// await userController.login()
			});

		this.localOptions = {
			usernameField: 'email',
			passwordField: 'password',
			session: false
		};

		this.jwtOptions = {
			jwtFromRequest: PassportJwt.ExtractJwt.fromAuthHeader(),
			secretOrKey: CONFIG.AUTH.SECRET
		};

		this.passport.use(this.jwtLogin);
		this.passport.use(this.localLogin);
	}
}

export default new AuthenticationPassport().passport;