import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { User } from "./User.entity";

@Entity("user_ability")
export class UserAbiliy {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: true })
    job: string;

    @Column({ type: "varchar", nullable: true })
    position: string;

    @Column({ type: "varchar", nullable: true })
    address: string;

    @Column({ type: "varchar", nullable: true })
    start: string;

    @Column({ type: "varchar", nullable: true })
    end: string;

    @OneToOne((type) => User, (user) => user.ability, {
        onDelete: "CASCADE",
    })
    @JoinColumn()
    user: User;
}
