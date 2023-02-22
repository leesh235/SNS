import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
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

    const { loading, data, error } = useSelector((state: any) => {
        if (!email) return { loading: false, data: [], error: "" };

        return state.profile?.[imageList[type]];
    });

    useEffect(() => {
        if (!email) return;
        if (type === "latest")
            dispatch(profileActionCreator.getLatestImage({ email }));
        else dispatch(profileActionCreator.getAllImage({ email, take: 6 }));
    }, [dispatch, email]);

    return { loading, data, error };
};
