import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Achievement } from './Achievement';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ select: false })
  password: string;

  @OneToMany(() => Achievement, achievements => achievements.user)
  achievements: Achievement;
  constructor(id: number) {
    this.id = id;
  }
}
