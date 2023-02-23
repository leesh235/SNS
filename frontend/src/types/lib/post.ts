export interface GetPost {
    postId: number;
}

export interface WritePost {
    contents: string;
    images?: Array<{ id: number; url: string }>;
}

export interface MpdifyPost {
    postId: number;
    contents: string;
    images?: Array<{ id: number; url: string }>;
}

export interface DeletePost {
    postId: number;
}

export interface Like {
    postId: number;
}

export interface Take {
    take?: number;
}
export interface ListType {
    type?: "allPosts" | "myPosts" | "likePosts" | "friendsPosts";
}

export interface PostDetail {
    commentQuantity?: number | string;
    contents: string;
    createAt?: string;
    id: number;
    images?: [];
    likeQuantity?: number | string;
    likeStatus?: 0 | 1;
    profileImage?: string;
    userId?: string;
    writer?: string;
}
