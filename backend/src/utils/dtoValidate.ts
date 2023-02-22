import { validate } from "class-validator";

export const validateUtil = async (dto: any) => {
    const errors: any[] = await validate(dto);
    if (errors.length > 0) return true;
    return false;
};
