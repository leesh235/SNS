import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("friends")
export class Friends {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "varchar", nullable: false, name: "user_one" })
    userOne: string;

    @Column({ type: "varchar", nullable: false, name: "user_two" })
    userTwo: string;

    @Column({ type: "boolean", default: false, name: "status" })
    status: boolean;
}
