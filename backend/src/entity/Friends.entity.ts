import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("friends")
export class Friends {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ default: false })
    status!: boolean;

    @CreateDateColumn({ type: "timestamp", name: "create_date" })
    createdAt!: Date | undefined;

    @ManyToOne(() => User, (user) => user.requestUser, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "request_user", referencedColumnName: "email" })
    requestUser!: User;

    @ManyToOne(() => User, (user) => user.responseUser, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "response_user", referencedColumnName: "email" })
    responseUser!: User;
}
