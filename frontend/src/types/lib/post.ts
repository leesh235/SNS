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
