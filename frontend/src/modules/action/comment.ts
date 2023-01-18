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
    list: (data: GetCommentList) => {
        return {
            type: commentAction.list,
            data,
        };
    },
    write: (data: WriteComment) => {
        return {
            type: commentAction.write,
            data,
        };
    },
    modify: (data: ModifyComment) => {
        return {
            type: commentAction.modify,
            data,
        };
    },
    delete: (data: DeleteComment) => {
        return {
            type: commentAction.delete,
            data,
        };
    },
};
