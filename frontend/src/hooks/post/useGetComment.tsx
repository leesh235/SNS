import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentActionCreator } from "../../modules/action/comment";

export const useGetComment = (id: number) => {
    const dispatch = useDispatch();
    const { loading, data, error } = useSelector((state: any) => {
        if (!state.comment[id])
            return { loading: false, data: null, error: "" };
        return state.comment[id];
    });

    useEffect(() => {
        dispatch(commentActionCreator.list({ postId: id }, id));
    }, [dispatch]);

    return { loading, data, error };
};
