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
import { Gender } from "../config/enums";
import { UserInfo } from "./User_Info.entity";
import { Friends } from "./Friends.entity";
import { Post } from "./Post.entity";
import { Comment } from "./comment.entity";
import { Likes } from "./Likes.entity";
import { FileUrl } from "./file_url.entity";
import { Request_friend } from "./Request_friend";
import { UserAbiliy } from "./User_ability";
import { UserUniversity } from "./User_university";
import { UserSchool } from "./User_school";

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
    introduction: string;

    @Column({ type: "varchar", nullable: true })
    coverImage: string;

    @Column({ type: "varchar", nullable: true })
    profileImage: string;

    @CreateDateColumn({ type: "timestamp", name: "create_date" })
    createdAt: Date | undefined;

    @UpdateDateColumn({ type: "timestamp", name: "update_date" })
    updatedAt: Date | undefined;

    @DeleteDateColumn({ type: "timestamp", name: "delete_date" })
    deletedAt: Date | undefined;

    @OneToOne((type) => UserInfo, (userInfo) => userInfo.user)
    userInfo: UserInfo;

    @OneToOne((type) => UserInfo, (ability) => ability.user)
    ability: UserAbiliy;

    @OneToOne((type) => UserInfo, (university) => university.user)
    university: UserUniversity;

    @OneToOne((type) => UserInfo, (school) => school.user)
    school: UserSchool;

    @OneToMany((type) => Post, (post) => post.user)
    post: Post[];

    @OneToMany((type) => Post, (comment) => comment.user)
    comment: Comment[];

    @OneToMany((type) => Likes, (likes) => likes.user)
    likes: Likes[];

    @OneToMany((type) => FileUrl, (fileUrl) => fileUrl.user)
    fileUrl: FileUrl[];

    @OneToMany((type) => Request_friend, (fromFriend) => fromFriend.fromUser)
    fromFriend: Request_friend[];

    @OneToMany((type) => Request_friend, (toFriend) => toFriend.toUser)
    toFriend: Request_friend[];

    @OneToMany((type) => Friends, (friendOne) => friendOne.userOne)
    friendOne: Friends[];

    @OneToMany((type) => Friends, (friendTwo) => friendTwo.userTwo)
    friendTwo: Friends[];
}
