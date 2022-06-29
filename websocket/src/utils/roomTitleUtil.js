export const roomTitleUtil = (arr, email) => {
    let result = "";
    const arr2 = arr.filter((val) => {
        return val.email !== email;
    });
    arr2.forEach((val, idx) => {
        if (arr.length === 1) result += `${val.nickName},`;
        if (arr.length > 1) {
            if (arr.length - 1 < idx) result += `${val.nickName}`;
            else result += `${val.nickName}`;
        }
    });
    return result;
};
