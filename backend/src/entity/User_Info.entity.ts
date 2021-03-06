import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { User } from "./User.entity";

@Entity("user_info")
export class UserInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: true })
    number: string;

    @Column({ type: "varchar", nullable: true })
    address: string;

    @OneToOne((type) => User, (user) => user.userInfo, { onDelete: "CASCADE" })
    @JoinColumn()
    user: User;
}
