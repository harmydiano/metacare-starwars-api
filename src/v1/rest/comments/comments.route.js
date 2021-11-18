import { Router } from 'express';
import Comment from './comments.model';
import response from '../../../middleware/response';
import CommentController from './comments.controller';

const router = Router();

const commentCtrl = new CommentController(Comment);

router.route('/comment')
	.post(commentCtrl.create, response);
router.route('/comment')
	.get(commentCtrl.find, response);

export default router;
