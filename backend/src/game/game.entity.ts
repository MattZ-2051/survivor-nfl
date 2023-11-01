import { Player } from 'src/player/player.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  // @ManyToMany(() => User)
  // @JoinTable()
  // users: User[];

  @OneToMany(() => Player, (player) => player.game)
  players: Player[];
}
