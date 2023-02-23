import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import { profileActionCreator } from "../../modules/action/profile";

const imageList = {
    all: "allImage",
    latest: "latestImage",
};

export const useGetImage = (
    type: "all" | "latest" = "latest",
    email?: string
) => {
    const dispatch = useDispatch();

    const [count, setCount] = useState(6);

    const { loading, data, error } = useSelector((state: any) => {
        if (!email) return { loading: false, data: [], error: "" };

        return state.profile?.[imageList[type]];
    });

    const handleAllImgClick = () => {
        if (count > data?.length) return;
        setCount((prev) => prev + 6);
    };

    useEffect(() => {
        if (!email) return;
        if (type === "latest")
            dispatch(profileActionCreator.getLatestImage({ email }));
        else dispatch(profileActionCreator.getAllImage({ email, take: count }));
    }, [dispatch, email, count]);

    return { loading, data, error, handleAllImgClick };
};
