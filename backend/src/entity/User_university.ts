import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { User } from "./User.entity";

@Entity("user_university")
export class UserUniversity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: true })
    university: string;

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
    user: User;
}
