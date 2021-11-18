import config from '../../../../config/default';
import * as Joi from 'joi';
import AppError from '../../../lib/api/app-error';

/**
 * The Comment Validation class
 */
class CommentValidation {
	/**
	 * @param {Object} body The object to perform validation on
	 * @return {Validator} The validator object with the specified rules.
	 */
	async create(body = {}) {
		const schema = Joi.object({
			film_id: Joi.number()
				.required(),
			ip_address: Joi.string()
				.required(),
			text: Joi.string()
				.limit(500)
				.required()
            
		}).options({ abortEarly: false });
		const validate = await schema.validate(body, config.options);
		return AppError.formatInputError(validate);
	}
}
export default CommentValidation;
