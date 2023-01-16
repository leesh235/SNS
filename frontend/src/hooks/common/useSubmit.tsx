import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StoreType } from "../../types/common";

interface Props {
    stateFunc: (state: any) => any;
}

export const useSubmit = ({ stateFunc }: Props) => {
    const dispatch = useDispatch();

    const [flag, setFlag] = useState<boolean>(false);
    const [action, setAction] = useState<any>({});
    const [errorMessage, setErrorMessage] = useState<string>("");

    const { loading, data, error }: StoreType = useSelector(stateFunc);

    const handleDispatch = (
        actionCreator: any = {},
        errorMessage: string = ""
    ) => {
        setFlag(true);
        setAction(actionCreator);
        setErrorMessage(errorMessage);
    };

    useEffect(() => {
        console.log("dis");
        if (flag) {
            dispatch(action);
            setFlag(false);
        }
    }, [dispatch, flag]);

    useEffect(() => {
        if (error) alert(errorMessage);
    }, [loading]);

    return {
        handleDispatch,
    };
};
