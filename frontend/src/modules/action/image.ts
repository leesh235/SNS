import { SingleImage, ArrayImage } from "../../types/lib/image";

export const imageAction = {
    single: "image/SINGLE",
    array: "image/ARRAY",
    remove: "image/REMOVE",
};

export const imageActionCreator = {
    single: (data: SingleImage) => {
        return {
            type: imageAction.single,
            data,
        };
    },
    array: (data: ArrayImage) => {
        return {
            type: imageAction.array,
            data,
        };
    },
    remove: () => {
        return {
            type: imageAction.remove,
        };
    },
};
