
const CONFIG = {

	IS_PRODUCTION: false,
	CLUSTER: {
		NUMBER: 0,
		USE: false
	},
	DEBUG: {
		DEBUG_MODE: true
	},
	DB: {
		HOST: "localhost",
		DATABASE: "my_uni",
		USERNAME: "root",
		PASSWORD: "root",
		CHARSET: "utf8",
		COLLATE: "",
		TABLE_PREFIX: ""
	},
	HTTP: {
		PORT: 8064
	},
	TCP: {
		PORT: 3032
	},
	AUTH: {
		SCHEME: "Bearer",
		SECRET: "eypZAZy0CY^g9%KreypZAZy0CY^g9%Kr",
	},
	HASH: {
		SALT_ROUNDS: 12
	}
}

export default CONFIG;