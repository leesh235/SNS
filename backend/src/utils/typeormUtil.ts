import { PostMode } from "../config/enums";
import { Not } from "typeorm";

export const findAllModeUtil = (email: string, mode: any, where: any) => {
    switch (mode) {
        case PostMode.MY:
            return {
                ...where,
                user: {
                    email,
                },
            };
        case PostMode.LIKE:
            return {
                ...where,
                likes: {
                    user: { email },
                },
            };
        case PostMode.BOOKMARK:
            return {
                ...where,
            };
        case PostMode.FRIENDS:
            return {
                ...where,
            };
        case PostMode.ALL: {
            return {
                ...where,
                user: {
                    email: Not(email),
                },
            };
        }
        default: {
            return {
                ...where,
            };
        }
    }
};
