import { Join } from "../../types/auth";

export const JOIN = "auth/JOIN";
export const JOIN_SUCCESS = "auth/JOIN_SUCCESS";
export const JOIN_ERROR = "auth/JOIN_ERROR";

export const setJoin = (data: Join) => {
    return {
        type: JOIN,
        data,
    };
};
