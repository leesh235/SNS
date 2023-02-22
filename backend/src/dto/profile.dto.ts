import { IsNotEmpty, IsEmail, IsString } from "class-validator";
import { User } from "../entity/user.entity";

export class ProfileReqDto {
    constructor(email: string) {
        this.email = email;
    }

    @IsEmail()
    @IsNotEmpty()
    private email: string;

    toEntity() {
        const user = new User();
        user.email = this.email;
        return user;
    }
}

export class ProfileResDto {
    constructor(
        email: string,
        nickName: string,
        gender: string,
        birth: string,
        createdAt: string,
        introduce: string,
        coverImage: string,
        profileImage: string
    ) {
        this.email = email;
        this.nickName = nickName;
        this.gender = gender;
        this.birth = birth;
        this.createdAt = createdAt;
        this.introduce = introduce;
        this.coverImage = coverImage;
        this.profileImage = profileImage;
    }

    @IsEmail()
    private email: string;

    @IsString()
    private nickName: string;

    @IsString()
    private gender: string;

    @IsString()
    private birth: string;

    @IsString()
    private createdAt: string;

    @IsString()
    private introduce: string;

    @IsString()
    private coverImage: string;

    @IsString()
    private profileImage: string;

    @IsString()
    private grade: string;
}
