import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { Post } from "./Post.entity";
import { User } from "./User.entity";

@Entity("file_url")
export class FileUrl {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", nullable: false })
    date: string;

    @Column({ type: "varchar", nullable: false })
    fileName: string;

    @ManyToOne((type) => User, (user) => user.fileUrl, { onDelete: "CASCADE" })
    @JoinColumn({ name: "userId", referencedColumnName: "email" })
    user: User;

    @ManyToOne((type) => Post, (post) => post.fileUrl, { onDelete: "CASCADE" })
    @JoinColumn({ name: "postId", referencedColumnName: "id" })
    post: Post;
}
