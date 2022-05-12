import { dataSource } from "../config/typeorm";
import { Comment } from "../entity/comment.entity";

const commentRepository = dataSource.getRepository(Comment);

export const findAll = async (req: any) => {
    try {
        const {
            query: { postId },
        } = req;

        const result = await commentRepository.find({
            relations: { post: true, user: true },
            where: { post: { id: Number(postId) } },
            select: {
                id: true,
                createdAt: true,
                contents: true,
                user: {
                    email: true,
                    nickName: true,
                },
                post: {},
            },
            order: {
                createdAt: "desc",
            },
        });
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
        return [];
    }
};

export const save = async (req: any) => {
    try {
        const {
            user: { email },
            body: { postId, contents },
        } = req;

        const comment = new Comment();
        comment.user = email;
        comment.post = postId;
        comment.contents = contents;

        const result = await commentRepository.save(comment);
        console.log(result);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const modify = async (req: any) => {
    try {
        const {
            user: { email },
            body: { postId, contents },
        } = req;

        const result = await commentRepository.update(
            { id: postId },
            { contents }
        );
        console.log(result);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const delete_comment = async (req: any) => {
    try {
        const {
            user: { email },
            body: { postId },
        } = req;
        const result = await commentRepository.softDelete({
            id: postId,
            user: { email },
        });
        console.log(result);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};
