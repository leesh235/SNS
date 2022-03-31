import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from "typeorm";

@Entity("comment")
export class Comment {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "int", nullable: false })
    postId!: number;

    @Column({ type: "int", nullable: false })
    userId!: number;

    @Column({ type: "int" })
    commentId: number;

    @Column({ type: "varchar", nullable: false })
    contents!: string;

    @CreateDateColumn({ type: "timestamp", name: "create_date" })
    createdAt: Date | undefined;

    @UpdateDateColumn({ type: "timestamp", name: "update_date" })
    updatedAt: Date | undefined;

    @DeleteDateColumn({ type: "timestamp", name: "delete_date" })
    deletedAt: Date | undefined;
}
