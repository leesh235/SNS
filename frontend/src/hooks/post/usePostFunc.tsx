import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActionCreator } from "../../modules/action/post";

export const usePostFunc = (postId?: number) => {
    const dispatch = useDispatch();

    const handleLike: React.MouseEventHandler = useCallback(() => {
        if (postId) dispatch(postActionCreator.like({ postId }));
    }, [dispatch]);

    const handleDelete = useCallback(() => {
        if (!postId) return;
        if (
            window.confirm(
                "휴지통으로 보내시겠습니까?(30일 후에 영구 삭제됩니다.)"
            )
        )
            dispatch(postActionCreator.delete({ postId }, { id: postId }));
    }, [dispatch]);

    const handleWrite = useCallback(
        (formData: any) => {
            if (!postId) dispatch(postActionCreator.write(formData));
            else
                dispatch(
                    postActionCreator.modify(
                        { postId, ...formData },
                        { id: postId }
                    )
                );
        },
        [dispatch]
    );

    return { handleLike, handleDelete, handleWrite };
};
