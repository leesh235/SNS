import {
    Login,
    Join,
    FindPassword,
    VerifyCodeNumber,
    ModifyPassword,
} from "../../types/auth";

export const authAction = {
    join: "auth/JOIN",
    login: "auth/LOGIN",
    logout: "auth/LOGOUT",
    refresh: "auth/REFRESH",
    findPassword: "auth/FIND_PASSWORD",
    verifyCodeNumber: "auth/VERIFY_CODENUMBER",
    modifyPassword: "auth/MODIFY_PASSWORD",
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
    findPassword: (data: FindPassword) => {
        return {
            type: authAction.findPassword,
            data,
        };
    },
    verifyCodeNumber: (data: VerifyCodeNumber) => {
        return {
            type: authAction.verifyCodeNumber,
            data,
        };
    },
    modifyPassword: (data: ModifyPassword) => {
        return {
            type: authAction.modifyPassword,
            data,
        };
    },
};
