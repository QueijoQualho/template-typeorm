import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Users")
export class User {

  @PrimaryGeneratedColumn("increment")
    id: number;

  @Column()
    firstName: string;

  @Column()
    lastName: string;

  @Column()
    age: number;

}
