/**
 * People Schema
 */
import Sequelize from 'sequelize';
import db from '../../../setup/database';
import Film from '../film/film.model';
import PeopleProcessor from './people.processor';

const People = db().define('people', {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: Sequelize.INTEGER,
	},
	film_id: {
		type: Sequelize.INTEGER,
		allowNull: false, 
		references: {
			model: Film,
			key: 'id'
		}
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	height: {
		type: Sequelize.STRING,
		allowNull: false
	},
	mass: {
		type: Sequelize.STRING,
		allowNull: false
	},
	hair_color: {
		type: Sequelize.STRING,
		allowNull: false
	},
	skin_color: {
		type: Sequelize.STRING,
		allowNull: false
	},
	eye_color: {
		type: Sequelize.STRING,
		allowNull: false
	},
	birth_year: {
		type: Sequelize.STRING,
		allowNull: false
	},
	gender: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

/**
 * @param {Model} model required for response
 * @return {Object} The processor class instance object
 */
People.getProcessor = (model) => {
	return new PeopleProcessor(model);
};

/**
 * @typedef People
 */
export default People;
