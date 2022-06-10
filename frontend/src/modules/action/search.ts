export const SEARCHALL = "search/SEARCHALL";
export const SEARCHPOST = "search/SEARCHPOST";
export const SEARCHPEOPLE = "search/SEARCHPEOPLE";

export const setSearchAll = (data: any) => {
    return {
        type: SEARCHALL,
        data,
    };
};

export const setSearchPost = (data: any) => {
    return {
        type: SEARCHPOST,
        data,
    };
};

export const setSearchPeople = (data: any) => {
    return {
        type: SEARCHPEOPLE,
        data,
    };
};
