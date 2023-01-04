export const searchAction = {
    all: "search/SEARCHALL",
    post: "search/SEARCHPOST",
    people: "search/SEARCHPEOPLE",
};

export const searchActionCreator = {
    all: (data: any) => {
        return {
            type: searchAction.all,
            data,
        };
    },
    post: (data: any) => {
        return {
            type: searchAction.post,
            data,
        };
    },
    people: (data: any) => {
        return {
            type: searchAction.people,
            data,
        };
    },
};
