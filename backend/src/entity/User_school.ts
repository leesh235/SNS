import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { User } from "./User.entity";

@Entity("user_school")
export class UserSchool {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: true })
    school: string;

    @Column({ type: "varchar", nullable: true, default: true })
    status: boolean;

    @Column({ type: "varchar", nullable: true })
    start: string;

    @Column({ type: "varchar", nullable: true })
    end: string;

    @OneToOne((type) => User, (user) => user.school, { onDelete: "CASCADE" })
    @JoinColumn()
    user: User;
}
