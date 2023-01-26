import { SingleImage, ArrayImage } from "../../types/lib/image";

export const imageAction = {
    single: "image/SINGLE",
    array: "image/ARRAY",
    remove: "image/REMOVE",
};

export const imageActionCreator = {
    single: (data: any) => {
        return {
            type: imageAction.single,
            data,
        };
    },
    array: (data: any) => {
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
