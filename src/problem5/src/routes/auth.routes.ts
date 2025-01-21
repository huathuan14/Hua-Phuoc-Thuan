import { Router } from 'express';
import { AuthController } from '../controllers/AuthController';

const router = Router();

router.post('/signUp', AuthController.signUp);
router.post('/login', AuthController.login);
// router.get('/', AuthController.getAll);

export default router;
