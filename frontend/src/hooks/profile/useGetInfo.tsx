import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { informationActionCreator } from "../../modules/action/information";

export const useGetInformation = ({ email }: { email?: string }) => {
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state.information.getInfo
    );

    useEffect(() => {
        if (email) dispatch(informationActionCreator.getInfo({ email }));
    }, [dispatch, email]);

    return { loading, data, error };
};
