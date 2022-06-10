import { Join, Login } from "../../types/auth";

export const JOIN = "auth/JOIN";
export const LOGIN = "auth/LOGIN";

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
