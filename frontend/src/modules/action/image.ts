import { SingleImage, ArrayImage } from "../../types/lib/image";

export const imageAction = {
    single: "image/SINGLE",
    array: "image/ARRAY",
    remove: "image/REMOVE",
    init: "image/INIT",
    modify: "image/MODIFY",
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
    modify: (data: any) => {
        return {
            type: imageAction.modify,
        };
    },
    init: () => {
        return {
            type: imageAction.init,
        };
    },
};
