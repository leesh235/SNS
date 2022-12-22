import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

interface Props {
    stateFunc: (state: any) => {};
    actionCreator: any;
}

export const useFetchData = ({ stateFunc, actionCreator }: Props) => {
    const dispatch = useDispatch();

    const { loading, data, error }: any = useSelector(stateFunc);

    useEffect(() => {
        dispatch(actionCreator);
    }, [dispatch]);

    return { loading, data, error };
};
