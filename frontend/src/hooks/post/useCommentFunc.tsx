import { useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { commentActionCreator } from "../../modules/action/comment";

export const useCommentFunc = (postId: number, id?: number) => {
    const dispatch = useDispatch();

    const handleWrite = (formData: any) => {
        dispatch(commentActionCreator.write({ postId, ...formData }));
    };

    const handleModify: React.MouseEventHandler = useCallback(
        (formData: any) => {
            if (!id) return;
            dispatch(commentActionCreator.modify({ id, ...formData }, postId));
        },
        [dispatch]
    );

    const handleDelete: React.MouseEventHandler = useCallback(() => {
        if (!id) return;
        if (window.confirm("댓글을 삭제하시겠습니끼?"))
            dispatch(commentActionCreator.delete({ id }, postId));
    }, [dispatch]);

    useEffect(() => {}, [dispatch]);

    return { handleWrite, handleModify, handleDelete };
};
