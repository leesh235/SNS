export const imageAction = {
    latestImage: "image/LATESTIMAGE",
    allImage: "image/ALLIMAGE",
};

export const imageActionCreator = {
    latestImage: (data: any) => {
        return {
            type: imageAction.latestImage,
            data,
        };
    },
    allImage: (data: any) => {
        return {
            type: imageAction.allImage,
            data,
        };
    },
};
