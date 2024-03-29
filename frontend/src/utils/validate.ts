import {
    LoginErrorType,
    FindPwErrorType,
    VerifyCodeNumberType,
    ModifyPwErrorType,
} from "../types/validate";
import {
    Introduce,
    AbilityType,
    SchoolType,
    UniversityType,
} from "../types/lib/profile";
import { Join } from "../types/lib/auth";
import { EMAIL_REGEX } from "./regExg";

export const loginValidate = ({ email, password }: LoginErrorType) => {
    const errors: LoginErrorType = {};

    if (!email) errors.email = "required";
    if (!password) errors.password = "required";

    return errors;
};

export const joinValidate = ({
    firstName,
    secondName,
    email,
    password,
    gender,
    year,
    month,
    day,
}: any) => {
    const errors: any = {};

    if (!firstName) errors.firstName = "required";
    if (!secondName) errors.secondName = "required";
    if (!password) errors.password = "required";
    if (!email) errors.email = "required";
    if (!EMAIL_REGEX.test(email)) errors.email = "email_regex";
    if (!password) errors.password = "required";
    if (!year) errors.year = "required";
    if (!month) errors.month = "required";
    if (!day) errors.day = "required";
    if (!gender) errors.gender = "required";

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

export const abilityValidate = ({
    name,
    position,
    address,
    start,
    end,
    id,
}: AbilityType) => {
    const errors: any = {};

    if (!name) errors.name = "requierd";

    return errors;
};

export const writePostValidate = ({ contents }: { contents?: string }) => {
    const errors: any = {};

    if (!contents) errors.contents = "requierd";

    return errors;
};
