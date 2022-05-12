export const COMMENTLIST = "comment/COMMENTLIST";
export const COMMENTLIST_SUCCESS = "comment/COMMENTLIST_SUCCESS";
export const COMMENTLIST_ERROR = "comment/COMMENTLIST_ERROR";

export const WRITE = "comment/WRITE";
export const WRITE_SUCCESS = "comment/WRITE_SUCCESS";
export const WRITE_ERROR = "comment/WRITE_ERROR";

export const MODIFY = "comment/MODIFY";
export const MODIFY_SUCCESS = "comment/MODIFY_SUCCESS";
export const MODIFY_ERROR = "comment/MODIFY_ERROR";

export const DELETE = "comment/DELETE";
export const DELETE_SUCCESS = "comment/DELETE_SUCCESS";
export const DELETE_ERROR = "comment/DELETE_ERROR";

export const setCommentList = (data: any) => {
    return {
        type: COMMENTLIST,
        data,
    };
};

export const setWriteComment = (data: any) => {
    return {
        type: WRITE,
        data,
    };
};

export const setModifyComment = (data: any) => {
    return {
        type: MODIFY,
        data,
    };
};

export const setDeleteComment = (data: any) => {
    return {
        type: DELETE,
        data,
    };
};
