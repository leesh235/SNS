import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { friendsActionCreator } from "../../modules/action/friends";

export const useFriendsFunc = ({ email = "" }: { email?: string }) => {
    const dispatch = useDispatch();

    const { loading, data, error } = useSelector(
        (state: any) => state.friends.isFriend
    );

    const handleFrinedClick = useCallback(() => {
        if (email !== "")
            dispatch(friendsActionCreator.request({ friendEmail: email }));
    }, [dispatch]);

    useEffect(() => {
        if (email !== "")
            dispatch(friendsActionCreator.isFriend({ friendEmail: email }));
    }, [dispatch]);

    return { isFriend: data, handleFrinedClick };
};
