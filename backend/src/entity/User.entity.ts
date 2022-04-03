import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToOne,
    OneToMany,
    PrimaryColumn,
} from "typeorm";
import { Gender } from "../config/enums";
import { UserInfo } from "./User_Info.entity";
import { Friends } from "./Friends.entity";
import { Post } from "./Post.entity";
import { Comment } from "./comment.entity";

@Entity("user")
export class User {
    @PrimaryColumn({ type: "varchar" })
    email!: string;

    @Column({ unique: true, type: "varchar", nullable: false })
    nickName!: string;

    @Column({ type: "varchar", nullable: false })
    password!: string;

    @Column({
        type: "enum",
        nullable: false,
        enum: Gender,
    })
    gender!: Gender;

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

    @OneToOne((type) => UserInfo, (userInfo) => userInfo.user)
    userInfo: UserInfo;

    @OneToMany((type) => Friends, (friends) => friends.user)
    friends: Friends;

    @OneToMany((type) => Post, (post) => post.user)
    post: Post;

    @OneToMany((type) => Post, (comment) => comment.user)
    comment: Comment;
}
