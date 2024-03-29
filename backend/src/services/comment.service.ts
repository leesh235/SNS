import { IsNull } from "typeorm";
import { dataSource } from "../config/typeorm";
import { Comment } from "../entity/comment.entity";
import { User } from "../entity/user.entity";

const userRepository = dataSource.getRepository(User);
const commentRepository = dataSource.getRepository(Comment);

export const findAll = async (req: any) => {
    try {
        const {
            query: { postId, take },
        } = req;

        const limit: number = take ? take : 6;

        const find = await commentRepository.find({
            relations: { post: true, user: true },
            where: { deletedAt: IsNull(), post: { id: Number(postId) } },
            select: {
                id: true,
                createdAt: true,
                contents: true,
                user: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
                post: {},
            },
            take: limit,
            order: {
                createdAt: "desc",
            },
        });

        const result: any[] = [];

        find.forEach((val) =>
            result.push({
                postId: +postId,
                contents: val.contents,
                createAt: val.createdAt,
                userId: val.user.email,
                id: val.id,
                writer: val.user.nickName,
                profileImage: val.user.profileImage,
            })
        );

        return { ok: true, data: result };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};

export const save = async (req: any) => {
    try {
        const {
            user: { email, nickName, profileImage },
            body: { postId, contents },
        } = req;

        const comment = new Comment();
        comment.user = email;
        comment.post = postId;
        comment.contents = contents;

        const saveComment = await commentRepository.save(comment);
        const findUser = await userRepository.findOne({
            where: {
                email: saveComment.user.email,
            },
            select: {
                email: true,
                profileImage: true,
                nickName: true,
            },
        });

        const result = {
            contents: saveComment.contents,
            createAt: saveComment.createdAt,
            postId: +saveComment.post,
            id: saveComment.id,
            writer: findUser?.nickName,
            userId: findUser?.email,
            profileImage: findUser?.profileImage,
        };

        return { ok: true, data: result };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};

export const modify = async (req: any) => {
    try {
        const {
            user: { email },
            body: { id, contents },
        } = req;

        await commentRepository.update({ id, user: { email } }, { contents });

        return { ok: true, data: { id, contents } };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};

export const remove = async (req: any) => {
    try {
        const {
            user: { email },
            query: { id },
        } = req;

        await commentRepository.softDelete({
            id,
            user: { email },
        });

        return { ok: true, data: { id } };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};
