import { Router } from 'express';
import Film from './film.model';
import response from '../../../middleware/response';
import FilmController from './film.controller';

const router = Router();

const filmCtrl = new FilmController(Film);

router.route('/film')
	.get(filmCtrl.find, response);

export default router;
