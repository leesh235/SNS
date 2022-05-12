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

    @UpdateDateColumn({ type: "timestamp", name: "update_date" })
    updatedAt: Date | undefined;

    @Column({ type: "boolean", default: false, name: "status" })
    status: boolean;

    @ManyToOne((type) => User, (req_user) => req_user.userOne, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "userOne", referencedColumnName: "email" })
    req_user: User;

    @ManyToOne((type) => User, (res_user) => res_user.userTwo, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "userTwo", referencedColumnName: "email" })
    res_user: User;
}
