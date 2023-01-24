import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { informationActionCreator } from "../../modules/action/information";

export const useGetInformation = () => {
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state.information.getInfo
    );

    useEffect(() => {
        dispatch(informationActionCreator.getInfo());
    }, [dispatch]);

    return { loading, data, error };
};
