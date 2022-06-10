export const COMMENTLIST = "comment/COMMENTLIST";
export const WRITE = "comment/WRITE";
export const MODIFY = "comment/MODIFY";
export const DELETE = "comment/DELETE";

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
