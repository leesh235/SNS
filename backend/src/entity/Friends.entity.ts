import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("friends")
export class Friends {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "int", nullable: false })
    friend1: number;

    @Column({ type: "int", nullable: false })
    friend2: number;
}
