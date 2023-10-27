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

  @Column({ nullable: false, type: 'jsonb' })
  schedule: JSON;

  @Column({ nullable: true, type: 'jsonb' })
  extraData: JSON;
}
