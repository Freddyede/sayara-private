import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({unique: true})
  email: string;
  @Column({type: 'json'})
  roles: {roles: string};
  @Column()
  password: string;
}