import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("token")
export class Token {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", nullable: false })
    email!: string;

    @Column({ type: "varchar", nullable: false })
    token!: string;
}
