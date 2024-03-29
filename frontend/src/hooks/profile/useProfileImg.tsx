import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { imageActionCreator } from "../../modules/action/image";
import { profileActionCreator } from "../../modules/action/profile";

export const useProfileImg = (
    type: "profileImg" | "coverImg" = "profileImg"
) => {
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state.image.single
    );

    const handleUploadImg = useCallback(
        (e) => {
            const { files } = e.target as HTMLInputElement;

            if (files?.length === 0 || !files) return;
            const formData = new FormData();
            formData.append("image", files[0]);

            dispatch(imageActionCreator.single(formData));
        },
        [dispatch]
    );

    const handleSubmit = useCallback(() => {
        if (data) {
            if (type === "profileImg")
                dispatch(
                    profileActionCreator.modifyProfileimage({ id: data.id })
                );
            else
                dispatch(
                    profileActionCreator.modifyCoverimage({ id: data.id })
                );
            dispatch(imageActionCreator.init());
        }
    }, [dispatch, data]);

    const handleRemove = useCallback(() => {
        dispatch(imageActionCreator.init());
    }, [dispatch]);

    return { data, handleUploadImg, handleSubmit, handleRemove };
};
