import AppController from '../_core/app.controller';
import _ from 'lodash';

/**
 *  CommentController
 */
class CommentController extends AppController {
	/**
     * @param {Model} model The default model object
     * for the controller. Will be required to create
     * an instance of the controller¬
     */
	constructor(model) {
		super(model);
		this.create = this.create.bind(this);
	}

	/**
	 * @param {Object} req The request object
	 * @param {Object} res The response object
	 * @param {callback} next The callback to the next program handler
	 */
	async create(req, res, next) {
		req.body.ip_address = req.ip;
		super.create(req, res, next);
	}
}

export default CommentController;
