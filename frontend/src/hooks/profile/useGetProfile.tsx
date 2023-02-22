import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { profileActionCreator } from "../../modules/action/profile";

export const useGetProfile = ({ email }: { email?: string }) => {
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state.profile?.profile
    );

    useEffect(() => {
        if (email) dispatch(profileActionCreator.profile({ email }));
    }, [dispatch, email]);

    return { loading, data, error };
};
