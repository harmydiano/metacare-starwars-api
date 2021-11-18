require('dotenv').config();
const PORT = process.env.PORT || 3010;
import {
	NAME, HEIGHT, MASS, HAIR_COLOR,
	SKIN_COLOR, EYE_COLOR, BIRTH_YEAR, GENDER,
	TITLE, EPISODE_ID, OPENING_CRAWL, DIRECTOR,
	PRODUCER, RELEASE_DATE, CREATE, EDITED
} from '../src/utils/constants';

module.exports = {
	app: {
		appName: process.env.APP_NAME || 'App Name',
		environment: process.env.NODE_ENV || 'dev',
		superSecret: process.env.SERVER_SECRET || 'ipa-BUhBOJAm',
		baseUrl: `http://localhost:${PORT}`,
		port: PORT,
		domain: process.env.APP_DOMAIN || 'app.com',
	},
	api: {
		lang: 'en',
		prefix: '^/api/v[1-9]',
		versions: [1],
		patch_version: '1.0.0',
		pagination: {
			itemsPerPage: 10
		}
	},
	databases: {
		sql: {
			name: process.env.DATABASE_NAME,
			user: process.env.DATABASE_USER,
			password: process.env.DATABASE_PASSWORD,
			host: process.env.DATABASE_HOST
		}
	},
	starwars: {
		url: process.env.STARWARS_BASE_URL
	},
	fillables: {
		people: [NAME, HEIGHT, MASS, 
			HAIR_COLOR, SKIN_COLOR, 
			EYE_COLOR, BIRTH_YEAR, GENDER],
		film: [TITLE, EPISODE_ID, OPENING_CRAWL, 
			DIRECTOR, PRODUCER, RELEASE_DATE, 
			CREATE, EDITED]
	},
	service: {
		film: process.env.FILM,
		people: process.env.PEOPLE,
		planets: process.env.PLANETS,
		vehicles: process.env.VEHICLES,
	},
	options: {
		errors: {
			wrap: 
			{label: ''}
		}
	}
};
