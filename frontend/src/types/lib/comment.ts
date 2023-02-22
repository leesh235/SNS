export interface GetCommentList {
    postId: number;
    take?: number;
}

export interface WriteComment {
    postId: number;
    contents: String;
}

export interface ModifyComment {
    id: number;
    contents: String;
}

export interface DeleteComment {
    id: number;
}
