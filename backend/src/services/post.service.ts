import { dataSource } from "../config/typeorm";
import { Post } from "../entity/Post.entity";
import { findUser } from "./user.service";

const postRepository = dataSource.getRepository(Post);

export const find = async (id: number) => {
    try {
        const post = await postRepository.findOne({
            where: { id },
            select: {
                updatedAt: false,
                deletedAt: false,
                id: false,
            },
        });
        const writer = await findUser(post);
        //이미지 경로
        let images: any[] = [];

        let result = { ...post, writer, images };
        if (post) {
            return result;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};

export const save = async (req: any) => {
    try {
        const {
            user: { email },
            body: { contents, date },
        } = req;
        const post = new Post();
        post.contents = contents;
        post.files = date;
        post.user = email;
        post.writer = await findUser(post);

        await postRepository.save(post);
        return true;
    } catch (error) {
        return false;
    }
};
