import { IsNotEmpty, IsEmail, IsString } from "class-validator";
import { User } from "../../entity/user.entity";

export class EmaileReqDto {
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

    getEmail() {
        return this.email;
    }
}
