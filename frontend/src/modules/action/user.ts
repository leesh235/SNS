import { UserEmail } from "../../types/lib/user";

export const userAction = {
    detail: "user/DETAIL",
    info: "user/INFO",
    images: "user/IMAGES",
    posts: "user/POSTS",
};

export const userActionCreator = {
    detail: (data: UserEmail) => {
        return {
            type: userAction.detail,
            data,
        };
    },
    info: (data: UserEmail) => {
        return {
            type: userAction.info,
        };
    },
    images: (data: UserEmail) => {
        return {
            type: userAction.images,
            data,
        };
    },
    posts: (data: UserEmail) => {
        return {
            type: userAction.posts,
            data,
        };
    },
};
