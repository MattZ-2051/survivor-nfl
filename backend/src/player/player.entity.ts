import { Game } from 'src/game/game.entity';
import { Team } from 'src/team/team.entity';
import { User } from 'src/user/user.entity';
import { Pick } from 'src/pick/pick.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Player {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ nullable: false, unique: true, type: 'varchar' })
  // game: string;

  @ManyToOne(() => Game, (game) => game.players)
  game: Game;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Player)
  @JoinColumn()
  currentPick: Pick;

  @Column({ nullable: true, default: null, type: 'jsonb' })
  previousPicks: Pick[];

  @Column({ nullable: false, default: false, type: 'boolean' })
  gameWinner: boolean;

  @Column({ nullable: false, default: false, type: 'boolean' })
  isOwner: boolean;
}
