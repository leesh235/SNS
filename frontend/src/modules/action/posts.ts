export const ALLPOSTS = "posts/ALLPOSTS";
export const MYPOSTS = "posts/MYPOSTS";
export const LIKEPOSTS = "posts/LIKEPOSTS";
export const FRIENDSPOSTS = "posts/FRIENDSPOSTS";
export const POSTDETAILS = "posts/POSTDETAILS";

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
