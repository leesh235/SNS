import { Take } from "../../types/lib/post";
export const postsAction = {
    allPosts: "posts/ALLPOSTS",
    myPosts: "posts/MYPOSTS",
    likePosts: "posts/LIKEPOSTS",
    friendsPosts: "posts/FRIENDSPOSTS",
};

export const postsActionCreator = {
    allPosts: (data: Take) => {
        return {
            type: postsAction.allPosts,
            data,
        };
    },
    myPosts: (data: Take) => {
        return {
            type: postsAction.myPosts,
            data,
        };
    },
    likePosts: (data: Take) => {
        return {
            type: postsAction.likePosts,
            data,
        };
    },
    friendsPosts: (data: Take) => {
        return {
            type: postsAction.friendsPosts,
            data,
        };
    },
    userPosts: (data: { take: number; userId?: string }) => {
        return {
            type: postsAction.friendsPosts,
            data,
        };
    },
};
