import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity("ability")
export class Ability {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: true })
    name!: string;

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
    user!: User;
}
