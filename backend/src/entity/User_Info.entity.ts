import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./User.entity";

@Entity("user_info")
export class UserInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    school: string;

    @Column()
    job: string;

    //     @OneToMany((type) => User, (user) => user.userInfo)
    //     user!: User;
}
