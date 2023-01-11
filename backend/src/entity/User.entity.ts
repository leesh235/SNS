import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToOne,
    OneToMany,
    PrimaryColumn,
} from "typeorm";
import { Gender, Grade } from "../config/enums";
import { Friends } from "./friends.entity";
import { Post } from "./post.entity";
import { Comment } from "./comment.entity";
import { Likes } from "./likes.entity";
import { School } from "./school.entity";
import { University } from "./university.entity";
import { Ability } from "./ability.entity";
import { Files } from "./files.entity";

@Entity("user")
export class User {
    @PrimaryColumn({ type: "varchar" })
    email!: string;

    @Column({ unique: true, type: "varchar", nullable: false })
    nickName!: string;

    @Column({ type: "varchar", nullable: false })
    password!: string;

    @Column({
        type: "enum",
        nullable: false,
        enum: Gender,
    })
    gender!: Gender;

    @Column({ default: true })
    activity: boolean;

    @Column({ type: "varchar", nullable: false })
    birth!: string;

    @Column({ type: "varchar", nullable: true })
    introduce: string;

    @Column({ type: "varchar", nullable: true })
    number: string;

    @Column({ type: "varchar", nullable: true })
    address: string;

    @Column({ type: "varchar", name: "cover_img", nullable: true })
    coverImage: string;

    @Column({ type: "varchar", name: "profile_img", nullable: true })
    profileImage: string;

    @Column({ type: "enum", nullable: false, enum: Grade, default: Grade.USER })
    grade: string;

    @CreateDateColumn({ type: "timestamp", name: "create_date" })
    createdAt: Date | undefined;

    @UpdateDateColumn({ type: "timestamp", name: "update_date" })
    updatedAt: Date | undefined;

    @DeleteDateColumn({ type: "timestamp", name: "delete_date" })
    deletedAt: Date | undefined;

    @OneToOne(() => School, (school) => school.user)
    school: School;

    @OneToOne(() => University, (university) => university.user)
    university: University;

    @OneToOne(() => Ability, (ability) => ability.user)
    ability: Ability;

    @OneToMany(() => Post, (post) => post.user)
    post: Post[];

    @OneToMany(() => Comment, (comment) => comment.user)
    comment: Comment[];

    @OneToMany(() => Likes, (likes) => likes.user)
    likes: Likes[];

    @OneToMany(() => Files, (files) => files.user)
    files: Files[];

    @OneToMany(() => Friends, (friends) => friends.requestUser)
    requestUser: Friends[];

    @OneToMany(() => Friends, (friends) => friends.responseUser)
    responseUser: Friends[];
}
