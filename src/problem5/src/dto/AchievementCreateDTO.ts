import { IsInt, IsNotEmpty } from 'class-validator';
import { IsString } from 'class-validator';
import { BaseDTO } from './BaseDTO';

export class AchievementCreateDTO extends BaseDTO {
    @IsString({ message: 'Title must be a string' })
    @IsNotEmpty({ message: 'Title is required' })
    title: string;

    @IsString({ message: 'Description must be a string' })
    @IsNotEmpty({ message: 'Description is required' })
    description: string;
} 