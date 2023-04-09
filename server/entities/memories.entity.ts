import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Memories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  created_at: string;

  @Column()
  updated_at: string;

  @Column()
  updated_by: number;
}
