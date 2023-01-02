export interface LoginErrorType {
    email?: string;
    password?: string;
}

export interface FindPwErrorType {
    email?: string;
}

export interface VerifyCodeNumberType {
    codeNumber?: string;
}

export interface ModifyPwErrorType {
    password?: string;
}
