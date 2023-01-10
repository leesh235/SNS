import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("university")
export class University {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: true })
    name!: string;

    @Column({ type: "varchar", nullable: true })
    major: string;

    @Column({ type: "varchar", nullable: true })
    degree: string;

    @Column({ type: "varchar", nullable: true })
    start: string;

    @Column({ type: "varchar", nullable: true })
    end: string;

    @Column({ type: "varchar", nullable: true, default: true })
    status: boolean;

    @OneToOne((type) => User, (user) => user.university, {
        onDelete: "CASCADE",
    })
    @JoinColumn()
    user!: User;
}
