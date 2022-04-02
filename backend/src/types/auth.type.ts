import { Gender } from "../config/enums";

export interface Login {
    email: string;
    password: string;
}

export interface Join {
    email: string;
    password: string;
    confirmPassword: string;
    birth: string;
    gender: Gender;
    nickName: string;
}
