export const LATESTIMAGE = "image/LATESTIMAGE";
export const LATESTIMAGE_SUCCESS = "image/LATESTIMAGE_SUCCESS";
export const LATESTIMAGE_ERROR = "image/LATESTIMAGE_ERROR";

export const ALLIMAGE = "image/ALLIMAGE";
export const ALLIMAGE_SUCCESS = "image/ALLIMAGE_SUCCESS";
export const ALLIMAGE_ERROR = "image/ALLIMAGE_ERROR";

export const setLatestImage = () => {
    return {
        type: LATESTIMAGE,
    };
};

export const setAlltImages = () => {
    return {
        type: ALLIMAGE,
    };
};
