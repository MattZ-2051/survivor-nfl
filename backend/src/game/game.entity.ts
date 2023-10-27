import { User } from 'src/user/user.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true, type: 'varchar' })
  name: string;

  @Column({ nullable: false, type: 'int' })
  code: number;

  @Column({ nullable: false, type: 'int' })
  currentWeek: number;

  @Column({ nullable: false, type: 'varchar' })
  status: string;

  @ManyToMany(() => User)
  @JoinTable()
  users: User[];
}
