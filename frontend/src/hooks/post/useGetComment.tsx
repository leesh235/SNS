import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentActionCreator } from "../../modules/action/comment";

export const useGetComment = (id: number) => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state: any) => {
        if (!state.comment[id]) return { loading: false, data: {}, error: "" };
        return {
            loading: state.comment.loading,
            data: state.comment[id],
            error: state.comment.error,
        };
    });

    useEffect(() => {
        dispatch(commentActionCreator.list({ postId: id }, { postId: id }));
    }, [dispatch]);

    return { loading, data, error };
};
