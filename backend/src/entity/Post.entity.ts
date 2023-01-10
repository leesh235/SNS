import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
    JoinColumn,
    ManyToOne,
} from "typeorm";
import { Comment } from "./comment.entity";
import { User } from "./user.entity";
import { Likes } from "./likes.entity";
import { Files } from "./files.entity";

@Entity("post")
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar" })
    contents!: string;

    @CreateDateColumn({ type: "timestamp", name: "create_date" })
    createdAt!: Date | undefined;

    @UpdateDateColumn({ type: "timestamp", name: "update_date" })
    updatedAt!: Date | undefined;

    @DeleteDateColumn({ type: "timestamp", name: "delete_date" })
    deletedAt!: Date | undefined;

    @OneToMany(() => Comment, (comment) => comment.post)
    comment: Comment;

    @OneToMany(() => Likes, (likes) => likes.post)
    likes: Likes;

    @OneToMany(() => Files, (files) => files.user)
    files: Files[];

    @ManyToOne(() => User, (user) => user.post, { onDelete: "CASCADE" })
    @JoinColumn({ name: "writer", referencedColumnName: "email" })
    user!: User;
}
