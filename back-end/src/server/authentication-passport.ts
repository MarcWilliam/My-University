import { Passport } from 'passport';
import * as PassportLocal from 'passport-local';
import * as PassportJwt from 'passport-jwt';

import CONFIG from '../config';
import { User } from '../models/user/user';

/**
 * @author Abdelrahman Abdelhamed
 */
export class PassportAut {

	private static _LocalOptions: any = {
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true,
		session: false
	};

	private static _JWTOptions: any = {
		jwtFromRequest: PassportJwt.ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
		secretOrKey: CONFIG.AUTH.SECRET,
	};;

	private static _Passport: any = new Passport();

	private static _LocalLogin: PassportLocal.Strategy;
	private static _JWTLogin: PassportJwt.Strategy;

	private static _AuthenticateJWT;
	private static _AuthenticateLocal;


	private static _init() {

		this._Passport = new Passport()

		this._LocalLogin = new PassportLocal.Strategy(this._LocalOptions, async (req, email, password, done) => {
			let user = await User.Login(email, password);
			return user ?
				done(null, user) :
				done(null, false, { message: 'Login failed. Please try again.' });
		});

		this._JWTOptions =
			this._JWTLogin = new PassportJwt.Strategy(this._JWTOptions, async (JwtPayLoad, done) => {
				let user = await User.Read({ id: JwtPayLoad.id })[0];
				return user ? done(null, user) : done(null, false);
			});

		this._Passport.use(this._JWTLogin);
		this._Passport.use(this._LocalLogin);

		this._AuthenticateJWT = this._Passport.authenticate('jwt', { session: false });
		this._AuthenticateLocal = this._Passport.authenticate('local', { session: false });
	}

	static get Passport() {
		if (!this._Passport) { this._init(); }
		return this._Passport;
	}

	static get AuthenticateJWT() {
		if (!this._AuthenticateJWT) { this._init(); }
		return this._AuthenticateJWT;
	}

	static get AuthenticateLocal() {
		if (!this._AuthenticateLocal) { this._init(); }
		return this._AuthenticateJWT;
	}
}