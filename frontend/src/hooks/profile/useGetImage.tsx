import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { profileActionCreator } from "../../modules/action/profile";

const imageList = {
    all: "latestImage",
    latest: "coverImage",
};

export const useGetImage = (type: "all" | "latest" = "latest") => {
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state.profile?.[imageList[type]]
    );

    useEffect(() => {
        if (type === "latest") dispatch(profileActionCreator.getLatestImage());
        else dispatch(profileActionCreator.getAllImage({}));
    }, [dispatch]);

    return { loading, data, error };
};
