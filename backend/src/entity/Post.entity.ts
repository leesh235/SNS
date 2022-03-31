import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
} from "typeorm";

@Entity("post")
export class Post {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "int", nullable: false })
    wirter!: number;

    @Column({ type: "varchar", nullable: false })
    title!: string;

    @Column({ type: "varchar" })
    contents: string;

    @Column({ type: "varchar" })
    image: string;

    @Column({ type: "varchar" })
    video: string;

    @CreateDateColumn({ type: "timestamp", name: "create_date" })
    createdAt: Date | undefined;

    @UpdateDateColumn({ type: "timestamp", name: "update_date" })
    updatedAt: Date | undefined;

    @DeleteDateColumn({ type: "timestamp", name: "delete_date" })
    deletedAt: Date | undefined;
}
