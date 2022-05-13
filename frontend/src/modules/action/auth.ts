import { Join, Login } from "../../types/auth";

export const JOIN = "auth/JOIN";
export const JOIN_SUCCESS = "auth/JOIN_SUCCESS";
export const JOIN_ERROR = "auth/JOIN_ERROR";

export const LOGIN = "auth/LOGIN";
export const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
export const LOGIN_ERROR = "auth/LOGIN_ERROR";

export const setJoin = (data: Join) => {
    return {
        type: JOIN,
        data,
    };
};

export const setLogin = (data: Login) => {
    return {
        type: LOGIN,
        data,
    };
};
