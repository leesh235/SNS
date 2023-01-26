import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { imageActionCreator } from "../../modules/action/image";

interface Props {
    type?: "array" | "single";
    initList?: Array<{ id: number; url: string }>;
}

export const useImageFunc = ({ type = "single", initList = [] }: Props) => {
    const dispatch = useDispatch();

    const [fileList, setFileList] =
        useState<{ id: number; url: any }[]>(initList);

    const { loading, data, error } = useSelector(
        (state: any) => state.image[type]
    );

    const uploadImage = useCallback(
        (e) => {
            const { files } = e?.target as HTMLInputElement;

            if (!files) return;

            const formData = new FormData();
            if (type === "array") {
                Array.from(files).forEach((file) =>
                    formData.append("images", file)
                );
                dispatch(imageActionCreator.array(formData));
            } else {
                formData.append("image", files[0]);
                dispatch(imageActionCreator.single(formData));
            }
        },
        [dispatch]
    );

    const removeImage = useCallback(
        (formData) => {
            dispatch(imageActionCreator.remove());
        },
        [dispatch]
    );

    const deleteImage = (id?: number) => {
        if (!id) return setFileList([]);
        const newList = fileList.filter((file) => file.id !== id);
        setFileList(newList);
    };

    useEffect(() => {
        setFileList(data);
    }, [data]);

    return { data: fileList, uploadImage, removeImage, deleteImage };
};
