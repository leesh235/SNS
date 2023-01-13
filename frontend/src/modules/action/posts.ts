export const postsAction = {
    allPosts: "posts/ALLPOSTS",
    myPosts: "posts/MYPOSTS",
    likePosts: "posts/LIKEPOSTS",
    friendsPosts: "posts/FRIENDSPOSTS",
};

export const postsActionCreator = {
    allPosts: (data: any) => {
        return {
            type: postsAction.allPosts,
            data,
        };
    },
    myPosts: (data: any) => {
        return {
            type: postsAction.myPosts,
            data,
        };
    },
    likePosts: (data: any) => {
        return {
            type: postsAction.likePosts,
            data,
        };
    },
    friendsPosts: () => {
        return {
            type: postsAction.friendsPosts,
        };
    },
};
