import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { authActionCreator } from "../../modules/action/auth";

export const useJoin = () => {
    const dispatch = useDispatch();

    const handleJoinClick = useCallback(
        (formData: any) => {
            dispatch(
                authActionCreator.join({
                    firstName: formData.firstName,
                    secondName: formData.secondName,
                    email: formData.email,
                    password: formData.password,
                    birth: formData.year + formData.month + formData.day,
                    gender: formData.gender,
                })
            );
        },
        [dispatch]
    );

    return { handleJoinClick };
};
