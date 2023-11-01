import { Pick } from 'src/pick/pick.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true, type: 'varchar' })
  name: string;

  @Column({ nullable: false, type: 'jsonb' })
  schedule: JSON;

  @Column({ nullable: true, type: 'jsonb' })
  extraData: JSON;

  @OneToMany(() => Pick, (pick) => pick.team)
  picks: Pick[];
}
