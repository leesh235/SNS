import { Search } from "../../types/lib/search";

export const searchAction = {
    all: "search/SEARCHALL",
    post: "search/SEARCHPOST",
    people: "search/SEARCHPEOPLE",
};

export const searchActionCreator = {
    all: (data: Search) => {
        return {
            type: searchAction.all,
            data,
        };
    },
    post: (data: Search) => {
        return {
            type: searchAction.post,
            data,
        };
    },
    people: (data: Search) => {
        return {
            type: searchAction.people,
            data,
        };
    },
};
