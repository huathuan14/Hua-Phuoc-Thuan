import { Request, Response } from 'express';
import { AchievementService } from '../services/AchievementService';
import { AchievementCreateDTO } from '../dto/AchievementCreateDTO';
import { AchievementUpdateDTO } from '../dto/AchievementUpdateDTO';
import { validateData } from '../common/utils/ValidationUtils';

const achievementService = new AchievementService();

export const AchievementController = {
  async list(req: Request, res: Response) {
    try {
      const achievements = await achievementService.getAchievementsByUserId(req.user.id);
      res.json(achievements);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async create(req: Request, res: Response) {
    const [achievementData, formattedErrors] = await validateData(AchievementCreateDTO, req.body);

    if (formattedErrors) {
        return res.status(400).json({ errors: formattedErrors });
    }

    try {
      const achievement = await achievementService.createAchievement(achievementData, req.user.id);
      res.status(201).json(achievement);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async update(req: Request, res: Response) {
    const [achievementData, formattedErrors] = await validateData(AchievementUpdateDTO, req.body);

    if (formattedErrors) {
      return res.status(400).json({ errors: formattedErrors });
    }

    try {
      const achievement = await achievementService.updateAchievement(
        parseInt(req.params.id), 
        achievementData, 
        req.user.id
      );
      res.json(achievement);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async delete(req: Request, res: Response) {
    try {
      await achievementService.deleteAchievement(parseInt(req.params.id), req.user.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
  async getById(req: Request, res: Response) {
    try {
      const achievement = await achievementService.getAchievementById(
        parseInt(req.params.id),
        req.user.id
      );
      res.json(achievement);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
}; 