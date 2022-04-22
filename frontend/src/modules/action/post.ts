import { WritePost } from "../../types/post";

export const WRITEPOST = "POST/WRITEPOST";
export const WRITEPOST_SUCCESS = "POST/WRITEPOST_SUCCESS";
export const WRITEPOST_ERROR = "POST/WRITEPOST_ERROR";

export const setWritePost = (data: any) => {
    return {
        type: WRITEPOST,
        data,
    };
};
