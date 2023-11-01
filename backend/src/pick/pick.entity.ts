import { Team } from 'src/team/team.entity';
import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Pick {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Team, (team) => team.picks)
  team: Team;

  @Column({ nullable: false, type: 'int' })
  week: number;

  @Column({ nullable: false, default: false, type: 'bool' })
  loser: boolean;
}
