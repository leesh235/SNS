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

export const JOIN = "auth/JOIN";
export const LOGIN = "auth/LOGIN";
export const LOGOUT = "auth/LOGOUT";
export const REFRESH = "auth/REFRESH";
export const FIND_PASSWORD = "auth/FIND_PASSWORD";
export const VERIFY_CODENUMBER = "auth/VERIFY_CODENUMBER";
export const MODIFY_PASSWORD = "auth/MODIFY_PASSWORD";

export const setJoin = (data: Join) => {
    return {
        type: authAction.join,
        data,
    };
};

export const setLogin = (data: Login) => {
    return {
        type: authAction.login,
        data,
    };
};

export const setLogout = () => {
    return {
        type: authAction.logout,
    };
};

export const setRefresh = () => {
    return {
        type: authAction.refresh,
    };
};

export const setFindPassword = (data: FindPassword) => {
    return {
        type: authAction.findPassword,
        data,
    };
};

export const setVerifyCodeNumber = (data: VerifyCodeNumber) => {
    return {
        type: authAction.verifyCodeNumber,
        data,
    };
};

export const setModifyPassword = (data: ModifyPassword) => {
    return {
        type: authAction.modifyPassword,
        data,
    };
};
