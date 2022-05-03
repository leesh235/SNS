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
import { User } from "./User.entity";
import { Likes } from "./Likes.entity";
import { FileUrl } from "./file_url.entity";

@Entity("post")
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar" })
    contents: string;

    @Column({ type: "varchar" })
    files: string;

    @CreateDateColumn({ type: "timestamp", name: "create_date" })
    createdAt: Date | undefined;

    @UpdateDateColumn({ type: "timestamp", name: "update_date" })
    updatedAt: Date | undefined;

    @DeleteDateColumn({ type: "timestamp", name: "delete_date" })
    deletedAt: Date | undefined;

    @OneToMany((type) => Comment, (comment) => comment.post)
    comment: Comment;

    @OneToMany((type) => Likes, (likes) => likes.post)
    likes: Likes;

    @OneToMany((type) => FileUrl, (fileUrl) => fileUrl.post)
    fileUrl: FileUrl[];

    @ManyToOne((type) => User, (user) => user.post, { onDelete: "CASCADE" })
    @JoinColumn({ name: "writer", referencedColumnName: "email" })
    user: User;
}
