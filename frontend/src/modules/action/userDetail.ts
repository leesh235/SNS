export const userDetailAction = {
    getAbility: "user_detail/GETABILITY",
    getInfo: "user_detail/GETINFO",
    setAbility: "user_detail/SETABILITY",
    setUuniversity: "user_detail/SETUNIVERSITY",
    setSchool: "user_detail/SETSCHOOL",
    setNumber: "user_detail/SETNUMBER",
    setAddress: "user_detail/SETADDRESS",
    deleteAbility: "user_detail/DELETEABILITY",
    deleteUniversity: "user_detail/DELETEUNIVERSITY",
    deleteSchool: "user_detail/DELETESCHOOL",
};

export const userDetailActionCreator = {
    getAbility: () => {
        return {
            type: userDetailAction.getAbility,
        };
    },
    getInfo: () => {
        return {
            type: userDetailAction.getInfo,
        };
    },
    setAbility: (data: any) => {
        return {
            type: userDetailAction.setAbility,
            data,
        };
    },
    setUuniversity: (data: any) => {
        return {
            type: userDetailAction.setUuniversity,
            data,
        };
    },
    setSchool: (data: any) => {
        return {
            type: userDetailAction.setSchool,
            data,
        };
    },
    setNumber: (data: any) => {
        return {
            type: userDetailAction.setNumber,
            data,
        };
    },
    setAddress: (data: any) => {
        return {
            type: userDetailAction.setAddress,
            data,
        };
    },
    deleteAbility: (data: any) => {
        return {
            type: userDetailAction.deleteAbility,
            data,
        };
    },
    deleteUniversity: (data: any) => {
        return {
            type: userDetailAction.deleteUniversity,
            data,
        };
    },
    deleteSchool: (data: any) => {
        return {
            type: userDetailAction.deleteSchool,
            data,
        };
    },
};
