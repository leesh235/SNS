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
    modify: (data: MpdifyPost) => {
        return {
            type: postAction.modify,
            data,
        };
    },
    delete: (data: DeletePost) => {
        return {
            type: postAction.delete,
            data,
        };
    },
    like: (data: Like) => {
        return {
            type: postAction.like,
            data,
        };
    },
};
