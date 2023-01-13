import {
    Login,
    Join,
    FindPassword,
    VerifyCodeNumber,
    ModifyPassword,
} from "../../types/lib/auth";

export const authAction = {
    join: "auth/JOIN",
    login: "auth/LOGIN",
    logout: "auth/LOGOUT",
    refresh: "auth/REFRESH",
    find: "auth/FIND",
    verify: "auth/VERIFY",
    modify: "auth/MODIFY",
};

export const authActionCreator = {
    join: (data: Join) => {
        return {
            type: authAction.join,
            data,
        };
    },
    login: (data: Login) => {
        return {
            type: authAction.login,
            data,
        };
    },
    logout: () => {
        return {
            type: authAction.logout,
        };
    },
    refresh: () => {
        return {
            type: authAction.refresh,
        };
    },
    find: (data: FindPassword) => {
        return {
            type: authAction.find,
            data,
        };
    },
    verify: (data: VerifyCodeNumber) => {
        return {
            type: authAction.verify,
            data,
        };
    },
    modify: (data: ModifyPassword) => {
        return {
            type: authAction.modify,
            data,
        };
    },
};
