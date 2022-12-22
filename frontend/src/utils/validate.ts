import { LoginErrorType } from "../types/validate";

export const loginValidate = ({ email, password }: LoginErrorType) => {
    const errors: LoginErrorType = {};

    if (!email) errors.email = "required";
    if (!password) errors.password = "required";

    return errors;
};
