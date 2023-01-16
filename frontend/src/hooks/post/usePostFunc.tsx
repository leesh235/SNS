import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActionCreator } from "../../modules/action/post";

export const usePostFunc = (postId: number) => {
    const dispatch = useDispatch();

    const handleLike: React.MouseEventHandler = (e) => {
        dispatch(postActionCreator.like({ postId }));
    };

    const handleDelete: React.MouseEventHandler = (e) => {
        if (
            window.confirm(
                "휴지통으로 보내시겠습니까?(30일 후에 영구 삭제됩니다.)"
            )
        )
            dispatch(postActionCreator.delete({ postId }));
    };

    return { handleLike, handleDelete };
};
