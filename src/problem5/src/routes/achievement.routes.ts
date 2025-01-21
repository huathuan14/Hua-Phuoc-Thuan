import { Router } from 'express';
import { AchievementController } from '../controllers/AchievementController';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

router.get('/', authMiddleware, AchievementController.list);
router.post('/', authMiddleware, AchievementController.create);
router.put('/:id', authMiddleware, AchievementController.update);
router.delete('/:id', authMiddleware, AchievementController.delete);
router.get('/:id', authMiddleware, AchievementController.getById);

export default router; 