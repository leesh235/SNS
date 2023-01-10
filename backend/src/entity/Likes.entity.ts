import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Post } from "./post.entity";
import { User } from "./user.entity";

@Entity("likes")
export class Likes {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Post, (post) => post.likes, { onDelete: "CASCADE" })
    @JoinColumn({ name: "post_id", referencedColumnName: "id" })
    post!: Post;

    @ManyToOne(() => User, (user) => user.likes, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id", referencedColumnName: "email" })
    user!: User;
}
