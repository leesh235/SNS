export const ALLPOSTS = "posts/ALLPOSTS";
export const MYPOSTS = "posts/MYPOSTS";
export const LIKEPOSTS = "posts/LIKEPOSTS";
export const FRIENDSPOSTS = "posts/FRIENDSPOSTS";
export const POSTDETAILS = "posts/POSTDETAILS";

export const setAllPosts = (data: any) => {
    return {
        type: ALLPOSTS,
        data,
    };
};

export const setMyPosts = (data: any) => {
    return {
        type: MYPOSTS,
        data,
    };
};

export const setLikePosts = (data: any) => {
    return {
        type: LIKEPOSTS,
        data,
    };
};

export const setFriendsPosts = () => {
    return {
        type: FRIENDSPOSTS,
    };
};
