import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
} from "typeorm";
import { Gender } from "../config/enums";
import { UserInfo } from "./User_Info.entity";

@Entity("user")
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true, type: "varchar", nullable: false })
    email!: string;

    @Column({ type: "varchar", nullable: false })
    password!: string;

    @Column({
        type: "enum",
        nullable: false,
        enum: Gender,
    })
    sex!: Gender;

    @Column({ default: true })
    activity: boolean;

    @Column({ type: "varchar", nullable: false })
    birth!: string;

    @CreateDateColumn({ type: "timestamp", name: "create_date" })
    createdAt: Date | undefined;

    @UpdateDateColumn({ type: "timestamp", name: "update_date" })
    updatedAt: Date | undefined;

    @DeleteDateColumn({ type: "timestamp", name: "delete_date" })
    deletedAt: Date | undefined;

    // @OneToMany((type) => UserInfo, (userInfo) => userInfo.user)
    // userInfo!: UserInfo[];
}
