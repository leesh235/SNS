export const commentAction = {
    list: "comment/COMMENTLIST",
    write: "comment/WRITE",
    modify: "comment/MODIFY",
    delete: "comment/DELETE",
};

export const commentActionCreator = {
    list: (data: any) => {
        return {
            type: commentAction.list,
            data,
        };
    },
    write: (data: any) => {
        return {
            type: commentAction.write,
            data,
        };
    },
    modify: (data: any) => {
        return {
            type: commentAction.modify,
            data,
        };
    },
    delete: (data: any) => {
        return {
            type: commentAction.delete,
            data,
        };
    },
};
