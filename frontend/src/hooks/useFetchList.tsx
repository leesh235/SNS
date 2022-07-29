import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPostDetails } from "../modules/action/post";
import {
    setAllPosts,
    setMyPosts,
    setLikePosts,
    setFriendsPosts,
} from "../modules/action/posts";

const ACTION = {
    ALL: "all",
    MY: "my",
    LIKE: "like",
    FRIEND: "friend",
};

const initState = {
    all: "allPosts",
    my: "myPosts",
    like: "likePosts",
    friend: "friendsPosts",
};

interface stateProps {
    action: "all" | "my" | "like" | "friend";
    data?: object;
}

export const useFetchList = () => {
    const [payload, setPayload] = useState<stateProps>({
        action: "all",
        data: {},
    });
    const dispatch = useDispatch();

    const data = useSelector(
        (state: any) => state.posts?.[initState[payload.action]].data
    );

    const isLoading = useSelector(
        (state: any) => state.post?.postDetails.loading
    );

    const actionCreator = () => {
        switch (payload.action) {
            case ACTION.ALL:
                return setAllPosts(payload.data);
            case ACTION.MY:
                return setMyPosts(payload.data);
            // case ACTION.LIKE:
            //     return setLikePosts()
            // case ACTION.FRIEND:
            //     return setFriendsPosts()
        }
    };

    useEffect(() => {
        dispatch(actionCreator());
        dispatch(setPostDetails({ type: payload.action, ...payload.data }));
    }, [payload, isLoading]);

    return { data, setPayload };
};
