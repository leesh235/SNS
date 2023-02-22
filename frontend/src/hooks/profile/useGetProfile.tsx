import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { profileActionCreator } from "../../modules/action/profile";

export const useGetProfile = () => {
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state.profile?.profile
    );

    useEffect(() => {
        dispatch(profileActionCreator.profile({}));
    }, [dispatch]);

    return { loading, data, error };
};
