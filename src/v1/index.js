import { Router } from 'express';

import comment from './rest/comments/comments.route';
import film from './rest/film/film.route';
import people from './rest/people/people.route';

const router = Router();

router.use(comment);
router.use(film);
router.use(people);

export default router;
