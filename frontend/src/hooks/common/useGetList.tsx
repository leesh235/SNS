import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postsActionCreator } from "../../modules/action/posts";
import { ListType } from "../../types/lib/post";

export const useGetList = ({ type = "allPosts" }: ListType) => {
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state.post[type]
    );

    useEffect(() => {
        if (type === "myPosts") dispatch(postsActionCreator.myPosts({}));
        if (type === "likePosts") dispatch(postsActionCreator.likePosts({}));
        if (type === "friendsPosts")
            dispatch(postsActionCreator.friendsPosts({}));
        else dispatch(postsActionCreator.allPosts({}));
    }, [dispatch]);

    return { loading, data, error };
};
