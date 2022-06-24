export const GETABILITY = "user_detail/GETABILITY";
export const GETINFO = "user_detail/GETINFO";
export const SETABILITY = "user_detail/SETABILITY";
export const SETUNIVERSITY = "user_detail/SETUNIVERSITY";
export const SETSCHOOL = "user_detail/SETSCHOOL";
export const SETNUMBER = "user_detail/SETNUMBER";
export const SETADDRESS = "user_detail/SETADDRESS";

export const setGetAbility = () => {
    return {
        type: GETABILITY,
    };
};

export const setGetInfo = () => {
    return {
        type: GETINFO,
    };
};

export const setAbility = (data: any) => {
    return {
        type: SETABILITY,
        data,
    };
};

export const setUniversity = (data: any) => {
    return {
        type: SETUNIVERSITY,
        data,
    };
};

export const setSchool = (data: any) => {
    return {
        type: SETSCHOOL,
        data,
    };
};

export const setNumber = (data: any) => {
    return {
        type: SETNUMBER,
        data,
    };
};

export const setAddress = (data: any) => {
    return {
        type: SETADDRESS,
        data,
    };
};
