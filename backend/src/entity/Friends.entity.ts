import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { User } from "./User.entity";

@Entity("friends")
export class Friends {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: "timestamp", name: "create_date" })
    createdAt: Date | undefined;

    @ManyToOne((type) => User, (userOne) => userOne.friendOne, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "userOne", referencedColumnName: "email" })
    userOne: User;

    @ManyToOne((type) => User, (userTwo) => userTwo.friendTwo, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "userTwo", referencedColumnName: "email" })
    userTwo: User;
}
