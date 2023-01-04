import { GetPost, DeletePost } from "../../types/post";

export const postAction = {
    write: "post/WRITEPOST",
    list: "post/POSTDETAILS",
    detail: "post/POSTDETAIL",
    modify: "post/MODIFYPOST",
    delete: "post/DELETEPOST",
    like: "post/LIKE",
};

export const postActionCreator = {
    write: (data: any) => {
        return {
            type: postAction.write,
            data,
        };
    },
    list: (data: any) => {
        return {
            type: postAction.list,
            data,
        };
    },
    detail: (data: GetPost) => {
        return {
            type: postAction.detail,
            data,
        };
    },
    modify: (data: any) => {
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
    like: (data: any) => {
        return {
            type: postAction.like,
            data,
        };
    },
};
