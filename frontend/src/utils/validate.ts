import {
    LoginErrorType,
    FindPwErrorType,
    VerifyCodeNumberType,
    ModifyPwErrorType,
} from "../types/validate";
import { Introduce } from "../types/lib/profile";

export const loginValidate = ({ email, password }: LoginErrorType) => {
    const errors: LoginErrorType = {};

    if (!email) errors.email = "required";
    if (!password) errors.password = "required";

    return errors;
};

export const findPasswordValidate = ({ email }: FindPwErrorType) => {
    const errors: FindPwErrorType = {};

    if (!email) errors.email = "required";

    return errors;
};

export const verifyCodeNumberValidate = ({
    codeNumber,
}: VerifyCodeNumberType) => {
    const errors: VerifyCodeNumberType = {};

    if (!codeNumber) errors.codeNumber = "required";

    return errors;
};

export const modifyPasswordValidate = ({ password }: ModifyPwErrorType) => {
    const errors: ModifyPwErrorType = {};

    if (!password) errors.password = "required";

    return errors;
};

export const writeCommentValidate = ({ contents }: { contents: string }) => {
    const errors: { contents?: String } = {};

    if (!contents) errors.contents = "requierd";

    return errors;
};

export const modifyInroduceValidate = ({
    introduce,
    address,
    number,
}: Introduce) => {
    const errors: { introduce?: string } = {};

    if (!introduce) errors.introduce = "requierd";

    return errors;
};
