import { Router } from 'express';
import People from './people.model';
import response from '../../../middleware/response';
import PeopleController from './people.controller';

const router = Router();

const peopleCtrl = new PeopleController(People);

router.route('/people')
	.get(peopleCtrl.find, response);

export default router;
