export interface Login {
    email: string;
    password: string;
}

export interface Join {
    firstName: string;
    secondName: string;
    email: string;
    password: string;
    birth: string;
    gender: "male" | "female";
}

export interface FindPassword {
    email: string;
}

export interface VerifyCodeNumber {
    email: string;
    codeNumber: number;
}

export interface ModifyPassword {
    email: string;
    codeNumber: number;
    password?: string;
}
