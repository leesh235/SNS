import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../types/common";

interface Props {
    stateFunc: (state: any) => any;
    actionCreator: any;
}

export const useFetchData = ({
    stateFunc,
    actionCreator,
}: Props): StoreType => {
    const dispatch = useDispatch();

    const { loading, data, error }: StoreType = useSelector(stateFunc);

    useEffect(() => {
        dispatch(actionCreator);
    }, [dispatch]);

    return { loading, data, error };
};
