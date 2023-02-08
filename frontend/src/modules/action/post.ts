import {
    GetPost,
    DeletePost,
    WritePost,
    MpdifyPost,
    Like,
} from "../../types/lib/post";

export const postAction = {
    write: "post/WRITEPOST",
    detail: "post/POSTDETAIL",
    modify: "post/MODIFYPOST",
    delete: "post/DELETEPOST",
    like: "post/LIKE",
};

export const postActionCreator = {
    write: (data: WritePost) => {
        return {
            type: postAction.write,
            data,
        };
    },
    detail: (data: GetPost) => {
        return {
            type: postAction.detail,
            data,
        };
    },
    modify: (data: MpdifyPost, meta: { id: number }) => {
        return {
            type: postAction.modify,
            data,
            meta,
        };
    },
    delete: (data: DeletePost, meta: { id: number }) => {
        return {
            type: postAction.delete,
            data,
            meta,
        };
    },
    like: (data: Like) => {
        return {
            type: postAction.like,
            data,
        };
    },
};
