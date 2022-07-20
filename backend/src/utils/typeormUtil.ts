import { PostMode } from "../config/enums";

export const findAllModeUtil = (email: string, mode: any, where: any) => {
    switch (mode) {
        case PostMode.MY:
            return (where.user = { email });
        case PostMode.LIKE:
            return (where.likes = { userId: email });
        case PostMode.BOOKMARK:
            return where;
        case PostMode.FRIENDS:
            return where;
        default: {
            return where;
        }
    }
};
