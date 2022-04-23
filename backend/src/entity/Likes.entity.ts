import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { LikeStatus } from "../config/enums";
import { Post } from "./Post.entity";
import { User } from "./User.entity";

@Entity("likes")
export class Likes {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: "enum",
        nullable: false,
        enum: LikeStatus,
        default: LikeStatus.LIKE,
    })
    status: LikeStatus;

    @ManyToOne((type) => Post, (post) => post.likes, { onDelete: "CASCADE" })
    @JoinColumn({ name: "postId", referencedColumnName: "id" })
    post: Post;

    @ManyToOne((type) => User, (user) => user.likes, { onDelete: "CASCADE" })
    @JoinColumn({ name: "userId", referencedColumnName: "email" })
    user: User;
}
