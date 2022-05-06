import { GetPost } from "../../types/post";

export const WRITEPOST = "post/WRITEPOST";
export const WRITEPOST_SUCCESS = "post/WRITEPOST_SUCCESS";
export const WRITEPOST_ERROR = "post/WRITEPOST_ERROR";

export const POSTDETAIL = "post/POSTDETAIL";
export const POSTDETAIL_SUCCESS = "post/POSTDETAIL_SUCCESS";
export const POSTDETAIL_ERROR = "post/POSTDETAIL_ERROR";

export const MODIFYPOST = "post/MODIFYPOST";
export const MODIFYPOST_SUCCESS = "post/MODIFYPOST_SUCCESS";
export const MODIFYPOST_ERROR = "post/MODIFYPOST_ERROR";

export const setWritePost = (data: any) => {
    return {
        type: WRITEPOST,
        data,
    };
};

export const setPostDetail = (data: GetPost) => {
    return {
        type: POSTDETAIL,
        data,
    };
};

export const setModifyPost = (data: any) => {
    return {
        type: MODIFYPOST,
        data,
    };
};
