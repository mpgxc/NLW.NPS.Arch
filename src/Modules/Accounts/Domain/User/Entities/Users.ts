/* eslint-disable camelcase */
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('users')
class User {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: string;

  @CreateDateColumn()
  updated_at: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { User };
