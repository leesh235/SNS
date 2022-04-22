export interface GetPost {
    postId: string;
}

export interface WritePost {
    contents: string;
    images?: any;
}

export interface ModifyPost {
    postId: string;
    contents: string;
    images?: Array<any>;
}

export interface DeletePost {
    postId: string;
}

export interface Like {
    postId: string;
}
