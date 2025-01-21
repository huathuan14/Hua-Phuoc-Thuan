import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './User';
import { BaseModel } from './BaseModel';

@Entity()
export class Achievement extends BaseModel{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => User, user => user.achievements, { nullable: false })
  @JoinColumn()
  user: User;
} 