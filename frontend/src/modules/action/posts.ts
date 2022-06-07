export const ALLPOSTS = "posts/ALLPOSTS";
export const ALLPOSTS_SUCCESS = "posts/ALLPOSTS_SUCCESS";
export const ALLPOSTS_ERROR = "posts/ALLPOSTS_ERROR";

export const MYPOSTS = "posts/MYPOSTS";
export const MYPOSTS_SUCCESS = "posts/MYPOSTS_SUCCESS";
export const MYPOSTS_ERROR = "posts/MYPOSTS_ERROR";

export const LIKEPOSTS = "posts/LIKEPOSTS";
export const LIKEPOSTS_SUCCESS = "posts/LIKEPOSTS_SUCCESS";
export const LIKEPOSTS_ERROR = "posts/LIKEPOSTS_ERROR";

export const FRIENDSPOSTS = "posts/FRIENDSPOSTS";
export const FRIENDSPOSTS_SUCCESS = "posts/FRIENDSPOSTS_SUCCESS";
export const FRIENDSPOSTS_ERROR = "posts/FRIENDSPOSTS_ERROR";

export const setAllPosts = () => {
    return {
        type: ALLPOSTS,
    };
};

export const setMyPosts = (data: any) => {
    return {
        type: MYPOSTS,
        data,
    };
};

export const setLikePosts = () => {
    return {
        type: LIKEPOSTS,
    };
};

export const setFriendsPosts = () => {
    return {
        type: FRIENDSPOSTS,
    };
};
