import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User.entity";

@Entity("friends")
export class Friends {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", nullable: false })
  friend2: string;

  @ManyToOne((type) => User, (user) => user.friends)
  @JoinColumn({ name: "friend1", referencedColumnName: "email" })
  user: User;
}
