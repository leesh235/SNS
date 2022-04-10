import bcrypt from "bcrypt";

export const hashPassword = async (pw: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPw = await bcrypt.hash(pw, salt);
    return hashedPw;
};

export const comparePassword = async (pw: string, userPw: string) => {
    const checkPassword = await bcrypt.compareSync(pw, userPw);
    if (!checkPassword) {
        return false;
    }
    return true;
};
