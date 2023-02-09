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
    list: (data: GetCommentList, meta?: { postId: number }) => {
        return {
            type: commentAction.list,
            data,
            meta,
        };
    },
    write: (data: WriteComment, meta?: { postId: number }) => {
        return {
            type: commentAction.write,
            data,
            meta,
        };
    },
    modify: (data: ModifyComment, meta?: { postId: number; id: number }) => {
        return {
            type: commentAction.modify,
            data,
            meta,
        };
    },
    delete: (data: DeleteComment, meta?: { postId: number; id: number }) => {
        return {
            type: commentAction.delete,
            data,
            meta,
        };
    },
};
