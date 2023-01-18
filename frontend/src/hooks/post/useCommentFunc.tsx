import { useDispatch, useSelector } from "react-redux";
import { useEffect, useCallback } from "react";
import { commentActionCreator } from "../../modules/action/comment";

export const useCommentFunc = (postId: number, id: number) => {
    const dispatch = useDispatch();

    const handleModify: React.MouseEventHandler = useCallback(() => {}, [
        dispatch,
    ]);

    const handleDelete: React.MouseEventHandler = useCallback(() => {
        if (window.confirm("댓글을 삭제하시겠습니끼?"))
            dispatch(commentActionCreator.delete({ id }, postId));
    }, [dispatch]);

    useEffect(() => {}, [dispatch]);

    return { handleModify, handleDelete };
};
