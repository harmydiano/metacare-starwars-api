/**
 * Comment Schema
 */
import Sequelize from 'sequelize';
import db from '../../../setup/database';
import Film from '../film/film.model';
import CommentsProcessor from './comments.processor';
import CommentsValidation from './comments.validation';

const Comments = db().define('comments', {
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
	ip_address: {
		type: Sequelize.STRING,
		allowNull: false
	},
	text: {
		type: Sequelize.STRING,
		allowNull: false
	},
	deleted: {
		type: Sequelize.BOOLEAN,
		defaultValue: 0
	},
	date: {
		type: Sequelize.DATE,
		defaultValue: Sequelize.NOW
	}
});

/**
 * @return {Object} The validator object with the specified rules.
 */
Comments.getValidator = () => {
	return new CommentsValidation();
};

/**
 * @param {Model} model required for response
 * @return {Object} The processor class instance object
 */
Comments.getProcessor = (model) => {
	return new CommentsProcessor(model);
};

/**
 * @typedef Comments
 */
export default Comments;
