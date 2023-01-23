import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useCallback } from "react";
import { profileActionCreator } from "../../modules/action/profile";

export const useProfileFunc = () => {
    const dispatch = useDispatch();

    const modifyIntroduce = useCallback(
        (formData: any) => {
            dispatch(profileActionCreator.modifyIntroduce(formData));
        },
        [dispatch]
    );

    return { modifyIntroduce };
};
