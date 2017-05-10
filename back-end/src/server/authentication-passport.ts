import { Passport } from 'passport';
import * as PassportLocal from 'passport-local';
import * as PassportJwt from 'passport-jwt';

import CONFIG from '../config';
import { User } from '../models/user/user';

/**
 * @author Abdelrahman Abdelhamed
 */
export class PassportAut {

	public static Passport;
	private static _LocalLogin: PassportLocal.Strategy;
	private static _JWTLogin: PassportJwt.Strategy;
	private static _LocalOptions: any;
	private static _JWTOptions: any;

	private static _AuthenticateJWT;
	private static _AuthenticateLocal;


	private static _init() {

		this.Passport = new Passport();

		this._LocalOptions = {
			usernameField: 'email',
			passwordField: 'password',
			passReqToCallback: true,
			session: false
		};

		this._LocalLogin = new PassportLocal.Strategy(this._LocalOptions, async (req, email, password, done) => {
			let user = await User.Login(email, password);
			return user ?
				done(null, user) :
				done(null, false, { message: 'Login failed. Please try again.' });
		});

		this._JWTOptions = {
			jwtFromRequest: PassportJwt.ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
			secretOrKey: CONFIG.AUTH.SECRET,
		};

		this._JWTLogin = new PassportJwt.Strategy(this._JWTOptions, async (JwtPayLoad, done) => {
			let user = await User.Read({ id: JwtPayLoad.id })[0];
			return user ? done(null, user) : done(null, false);
		});

		this.Passport.use(this._JWTLogin);
		this.Passport.use(this._LocalLogin);

		this._AuthenticateJWT = this.Passport.authenticate('jwt', { session: false });
		this._AuthenticateLocal = this.Passport.authenticate('local', { session: false });
	}

	static get AuthenticateJWT() {
		if (!this._AuthenticateJWT)
			this._init();
		return this._AuthenticateJWT;
	}

	static get AuthenticateLocal() {
		if (!this._AuthenticateLocal)
			this._init();
		return this._AuthenticateJWT;
	}
}