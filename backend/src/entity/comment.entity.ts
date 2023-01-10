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
import { Post } from "./post.entity";
import { User } from "./user.entity";

@Entity("comment")
export class Comment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", nullable: false })
    contents!: string;

    @CreateDateColumn({ type: "timestamp", name: "create_date" })
    createdAt!: Date | undefined;

    @UpdateDateColumn({ type: "timestamp", name: "update_date" })
    updatedAt!: Date | undefined;

    @DeleteDateColumn({ type: "timestamp", name: "delete_date" })
    deletedAt!: Date | undefined;

    @ManyToOne((type) => Post, (post) => post.comment, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "post_id", referencedColumnName: "id" })
    post!: Post;

    @ManyToOne(() => User, (user) => user.comment, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "writer", referencedColumnName: "email" })
    user!: User;
}
