import express from 'express';
const router = express.Router();
import { requireAuth, validateRequest } from '../../middleware';
import { body, query } from 'express-validator';
import { userActionController } from '../../controllers/v1';

router.post(
	'/',
	requireAuth({
		acceptedAuthModes: ['jwt']
	}),
	body('action'),
	validateRequest,
	userActionController.addUserAction
);

router.get(
	'/',
	requireAuth({
		acceptedAuthModes: ['jwt']
	}),
	query('action'),
	validateRequest,
	userActionController.getUserAction
);

export default router;
