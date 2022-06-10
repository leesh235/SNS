export const LATESTIMAGE = "image/LATESTIMAGE";
export const ALLIMAGE = "image/ALLIMAGE";

export const setLatestImage = (data: any) => {
    return {
        type: LATESTIMAGE,
        data,
    };
};

export const setAlltImages = (data: any) => {
    return {
        type: ALLIMAGE,
        data,
    };
};
