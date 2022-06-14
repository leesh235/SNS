import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
} from "typeorm";
import { User } from "./User.entity";

@Entity("request_friend")
export class Request_friend {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: "timestamp", name: "create_date" })
    createdAt: Date | undefined;

    @ManyToOne((type) => User, (fromUser) => fromUser.fromFriend, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "userOne", referencedColumnName: "email" })
    fromUser: User;

    @ManyToOne((type) => User, (toUser) => toUser.toFriend, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "userTwo", referencedColumnName: "email" })
    toUser: User;
}
