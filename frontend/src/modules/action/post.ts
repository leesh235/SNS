import { WritePost } from "../../types/post";

export const WRITEPOST = "post/WRITEPOST";
export const WRITEPOST_SUCCESS = "post/WRITEPOST_SUCCESS";
export const WRITEPOST_ERROR = "post/WRITEPOST_ERROR";

export const setWritePost = (data: any) => {
    return {
        type: WRITEPOST,
        data,
    };
};
