
export namespace HTTPstat {

	export enum Informational {
		Continue = 100,
		SwitchingProtocols,
		Processing
	}
	export enum Success {
		OK = 200,
		Created,
		Accepted,
		NonAuthoritativeInformation,
		NoContent,
		ResetContent,
		PartialContent,
		MultiStatus,
		AlreadyReported,
		IMUsed = 226,
	}
	export enum Redirection {
		MultipleChoices = 300,
		MovedPermanently,
		Found,
		SeeOther,
		NotModified,
		UseProxy,
		SwitchProxy,
		TemporaryRedirect,
		PermanentRedirect,
	}
	export enum ClientErr {
		BadRequest = 400,
		Unauthorized,
		PaymentRequired,
		Forbidden,
		NotFound,
		MethodNotAllowed,
		NotAcceptable,
		ProxyAuthenticationRequired,
		RequestTimeout,
		Conflict,
		Gone,
		LengthRequired,
		PreconditionFailed,
		PayloadTooLarge,
		URITooLong,
		UnsupportedMediaType,
		RangeNotSatisfiable,
		ExpectationFailed,
		ImATeapot,
		MisdirectedRequest = 421,
		UnprocessableEntity,
		Locked,
		FailedDependency,
		UpgradeRequired = 426,
		PreconditionRequired = 428,
		TooManyRequests,
		RequestHeaderFieldsTooLarge = 431,
		UnavailableForLegalReasons = 451,
	}
	export enum ServerErr {
		InternalServerError = 500,
		NotImplemented,
		BadGateway,
		ServiceUnavailable,
		GatewayTimeout,
		HTTPVersionNotSupported,
		VariantAlsoNegotiates,
		InsufficientStorage,
		LoopDetected,
		NotExtended = 510,
		NetworkAuthenticationRequired
	}

	export enum CustomErr {
		ValidationFailed = 1000,
		NoPermission
	}
}