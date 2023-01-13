import { backend } from "./axios";
import { api } from "../utils/routes";
import {
    GetCommentList,
    WriteComment,
    ModifyComment,
    DeleteComment,
} from "../types/lib/comment";

const list = async (data: GetCommentList) => {
    return await backend.get(api.comment.get, { params: data });
};

const write = async (data: WriteComment) => {
    return await backend.post(api.comment.write, data);
};

const modify = async (data: ModifyComment) => {
    return await backend.patch(api.comment.modify, data);
};

const remove = async (data: DeleteComment) => {
    return await backend.delete(api.comment.delete, { params: data });
};

export default {
    list,
    write,
    modify,
    remove,
};
