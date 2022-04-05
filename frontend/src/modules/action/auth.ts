import { Login } from "../../types/auth";

export const LOGIN = "auth/LOGIN";
export const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
export const LOGIN_ERROR = "auth/LOGIN_ERROR";

export const setLogin = (data: Login) => {
    return {
        type: LOGIN,
        data,
    };
};
