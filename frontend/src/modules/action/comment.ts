export const chatAction = {
    list: "comment/COMMENTLIST",
    write: "comment/WRITE",
    modify: "comment/MODIFY",
    delete: "comment/DELETE",
};

export const chatActionCreator = {
    list: (data: any) => {
        return {
            type: chatAction.list,
            data,
        };
    },
    write: (data: any) => {
        return {
            type: chatAction.write,
            data,
        };
    },
    modify: (data: any) => {
        return {
            type: chatAction.modify,
            data,
        };
    },
    delete: (data: any) => {
        return {
            type: chatAction.delete,
            data,
        };
    },
};
