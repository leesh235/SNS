import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsActionCreator } from "../../modules/action/posts";

export const useGetList = (type: string = "allPosts") => {
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state.post[type]
    );

    useEffect(() => {
        dispatch(postsActionCreator.allPosts({}));
    }, [dispatch]);

    return { loading, data, error };
};
