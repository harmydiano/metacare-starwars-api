/**
 * Film Schema
 */
import Sequelize from 'sequelize';
import db from '../../../setup/database';
import FilmProcessor from './film.processor';

const Films = db().define('films', {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: Sequelize.INTEGER,
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	episode_id: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	opening_crawl: {
		type: Sequelize.STRING,
		allowNull: false
	},
	director: {
		type: Sequelize.STRING,
		allowNull: false
	},
	producer: {
		type: Sequelize.STRING,
		allowNull: false
	},
	comments_count: {
		type: Sequelize.INTEGER,
		defaultValue: 0
	},
	release_date: {
		type: Sequelize.DATE,
		allowNull: false
	},
	created: {
		type: Sequelize.DATE,
	},
	edited: {
		type: Sequelize.DATE,
	},
	createdAt: {
		type: Sequelize.DATE,
	},
	updatedAt: {
		type: Sequelize.DATE,
	},
});

/**
 * @param {Model} model required for response
 * @return {Object} The processor class instance object
 */
Films.getProcessor = (model) => {
	return new FilmProcessor(model);
};

/**
 * @typedef Films
 */
export default Films;
