import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { profileActionCreator } from "../../modules/action/profile";

export const useUserInfo = () => {
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state.profile.simple
    );

    useEffect(() => {
        if (!data) dispatch(profileActionCreator.simple());
    }, [dispatch]);

    return { data };
};
