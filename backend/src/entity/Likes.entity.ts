import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
    Unique,
} from "typeorm";
import { Post } from "./post.entity";
import { User } from "./user.entity";

@Entity("likes")
@Unique("isLike", ["post", "user"])
export class Likes {
    @PrimaryGeneratedColumn()
    id!: number;

    @ManyToOne(() => Post, (post) => post.id, { onDelete: "CASCADE" })
    @JoinColumn({ name: "post_id" })
    post!: Post;

    @ManyToOne(() => User, (user) => user.email, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id" })
    user!: User;
}
