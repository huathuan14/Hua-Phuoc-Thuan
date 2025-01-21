import { AppDataSource } from '../config/db';
import { Achievement } from '../models/Achievement';
import { User } from '../models/User';

export class AchievementService {
  private achievementRepository = AppDataSource.getRepository(Achievement);

  async getAchievementsByUserId(userId: number): Promise<Achievement[]> {
    return await this.achievementRepository.find({
      where: { user: { id: userId } },
    });
  }

  async createAchievement(data: Partial<Achievement>, userId: number): Promise<Achievement> {
    data.user = new User(userId);
    data.createdBy = new User(userId);
    data.updatedBy = new User(userId);

    const achievement = this.achievementRepository.create(data);
    return await this.achievementRepository.save(achievement);
  }

  async updateAchievement(id: number, data: Partial<Achievement>, userId: number): Promise<Achievement> {
    const achievement = await this.achievementRepository.findOne({
      where: { id },
      relations: ['user']
    });
    if (!achievement) {
      throw new Error('Achievement not found');
    }
    if (achievement.user.id !== userId) {
      throw new Error('You do not have permission to update this achievement');
    }
    await this.achievementRepository.update(id, { ...data, updatedBy: new User(userId) });
    return achievement;
  }

  async deleteAchievement(id: number, userId: number): Promise<void> {
    const achievement = await this.achievementRepository.findOne({
      where: { id },
      relations: ['user']
    });
    if (!achievement) {
      throw new Error('Achievement not found');
    }
    if (achievement.user.id !== userId) {
      throw new Error('You do not have permission to delete this achievement');
    }
    await this.achievementRepository.delete(id);
  }

  async getAchievementById(id: number, userId: number): Promise<Achievement> {
    const achievement = await this.achievementRepository.findOne({
      where: { id },
      relations: ['user']
    });

    if (!achievement) {
      throw new Error('Achievement not found');
    }

    if (achievement.user.id !== userId) {
      throw new Error('You do not have permission to access this achievement');
    }

    return achievement;
  }
} 