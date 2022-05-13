import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    JoinColumn,
    ManyToOne,
} from "typeorm";
import { Post } from "./Post.entity";
import { User } from "./User.entity";

@Entity("comment")
export class Comment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", nullable: false })
    contents!: string;

    @CreateDateColumn({ type: "timestamp", name: "create_date" })
    createdAt: Date | undefined;

    @UpdateDateColumn({ type: "timestamp", name: "update_date" })
    updatedAt: Date | undefined;

    @DeleteDateColumn({ type: "timestamp", name: "delete_date" })
    deletedAt: Date | undefined;

    @ManyToOne((type) => Post, (post) => post.comment, {
        nullable: false,
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "postId", referencedColumnName: "id" })
    post: Post;

    @ManyToOne((type) => User, (user) => user.comment, {
        nullable: false,
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "writer", referencedColumnName: "email" })
    user: User;
}
