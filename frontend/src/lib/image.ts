import { backend } from "./axios";
import { api } from "../utils/routes";
import { SingleImage, ArrayImage } from "../types/lib/image";

const singleUpload = async (data: SingleImage) => {
    return await backend.post(api.image.single, data);
};

const arrayUpload = async (data: ArrayImage) => {
    return await backend.post(api.image.array, data);
};

const removeFile = async () => {
    return await backend.delete(api.image.remove);
};

export default { singleUpload, arrayUpload, removeFile };
