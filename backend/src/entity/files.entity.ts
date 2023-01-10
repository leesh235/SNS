import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Post } from "./post.entity";

@Entity("files")
export class Files {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", nullable: false })
    fileName!: string;

    @Column({ type: "varchar", nullable: false })
    originamName!: string;

    @Column({ type: "varchar", nullable: false })
    imageUrl!: string;

    @ManyToOne(() => User, (user) => user.post, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id", referencedColumnName: "email" })
    user: User;

    @ManyToOne(() => Post, (post) => post.files, { onDelete: "CASCADE" })
    @JoinColumn({ name: "post_id", referencedColumnName: "id" })
    post: Post;
}
