import {
    GetCommentList,
    WriteComment,
    ModifyComment,
    DeleteComment,
} from "../../types/lib/comment";

export const commentAction = {
    list: "comment/COMMENTLIST",
    write: "comment/WRITE",
    modify: "comment/MODIFY",
    delete: "comment/DELETE",
};

export const commentActionCreator = {
    list: (data: GetCommentList, meta?: any) => {
        return {
            type: commentAction.list,
            data,
            meta,
        };
    },
    write: (data: WriteComment, meta?: any) => {
        return {
            type: commentAction.write,
            data,
            meta,
        };
    },
    modify: (data: ModifyComment, meta?: any) => {
        return {
            type: commentAction.modify,
            data,
            meta,
        };
    },
    delete: (data: DeleteComment, meta?: any) => {
        return {
            type: commentAction.delete,
            data,
            meta,
        };
    },
};
