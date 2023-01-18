const ONE_DAY = 86400000 as const;
const ONE_HOUR = 3600000 as const;
const ONE_MINUTE = 60000 as const;

export const getDate = (timeStamp: any) => {
    const date = new Date(timeStamp);
    const nowDate = new Date();
    const subtraction = nowDate.getTime() - date.getTime();

    if (subtraction > ONE_DAY)
        return `${date.getFullYear()}년 ${
            date.getMonth() + 1
        }월 ${date.getDay()}일`;
    else if (subtraction >= ONE_HOUR)
        return `${Math.floor(subtraction / 1000 / 60 / 60)}시간 전`;
    else if (subtraction >= ONE_MINUTE)
        return `${Math.floor(subtraction / 1000 / 60)}분 전`;
    else return "방금";
};
