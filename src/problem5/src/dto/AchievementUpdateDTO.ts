import { IsOptional, IsString, IsInt } from 'class-validator';
import { BaseDTO } from './BaseDTO';

export class AchievementUpdateDTO extends BaseDTO {
    @IsOptional()
    @IsString({ message: 'Title must be a string' })
    title?: string;

    @IsOptional()
    @IsString({ message: 'Description must be a string' })
    description?: string;

    @IsOptional()
    @IsInt({ message: 'User ID must be an integer' })
    userId?: number;
} 