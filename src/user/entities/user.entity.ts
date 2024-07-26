const { Entity, Column, PrimaryGeneratedColumn } = require('typeorm');

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;
}