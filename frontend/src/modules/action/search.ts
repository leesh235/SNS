export const SEARCHALL = "search/SEARCHALL";
export const SEARCHALL_SUCCESS = "search/SEARCHALL_SUCCESS";
export const SEARCHALL_ERROR = "search/SEARCHALL_ERROR";

export const SEARCHPOST = "search/SEARCHPOST";
export const SEARCHPOST_SUCCESS = "search/SEARCHPOST_SUCCESS";
export const SEARCHPOST_ERROR = "search/SEARCHPOST_ERROR";

export const SEARCHPEOPLE = "search/SEARCHPEOPLE";
export const SEARCHPEOPLE_SUCCESS = "search/SEARCHPEOPLE_SUCCESS";
export const SEARCHPEOPLE_ERROR = "search/SEARCHPEOPLE_ERROR";

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
