import { PostMode } from "../config/enums";

export const findAllModeUtil = (email: string, mode: any, where: any) => {
    let result: any;
    switch (mode) {
        case PostMode.MY:
            return (result = {
                ...where,
                user: {
                    email,
                },
            });
        case PostMode.LIKE:
            return (result = {
                ...where,
                likes: {
                    userId: email,
                },
            });
        case PostMode.BOOKMARK:
            return (result = {
                ...where,
            });
        case PostMode.FRIENDS:
            return (result = {
                ...where,
            });
        default: {
            return (result = {
                ...where,
            });
        }
    }
};
