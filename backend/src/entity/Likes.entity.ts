import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { LikeStatus } from "../config/enums";

@Entity("likes")
export class Likes {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "int", nullable: false })
    postId!: string;

    @Column({ type: "int", nullable: false })
    userId!: string;

    @Column({
        type: "enum",
        nullable: false,
        enum: LikeStatus,
        default: LikeStatus.UNLIKE,
    })
    status!: LikeStatus;
}
