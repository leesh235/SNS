import { GetPost, DeletePost } from "../../types/post";

export const WRITEPOST = "post/WRITEPOST";
export const POSTDETAIL = "post/POSTDETAIL";
export const MODIFYPOST = "post/MODIFYPOST";
export const DELETEPOST = "post/DELETEPOST";
export const LIKE = "post/LIKE";

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

export const setDeletePost = (data: DeletePost) => {
    return {
        type: DELETEPOST,
        data,
    };
};

export const setLike = (data: any) => {
    return {
        type: LIKE,
        data,
    };
};
