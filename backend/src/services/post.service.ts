import { dataSource } from "../config/typeorm";
import { Post } from "../entity/Post.entity";
import { getImagePath } from "../utils/fileFunction";

const postRepository = dataSource.getRepository(Post);

export const find = async (id: number) => {
    try {
        const post = await postRepository.findOne({
            relations: {
                user: true,
            },
            where: { id },
            select: {
                contents: true,
                createdAt: true,
                files: true,
                user: {
                    email: true,
                    nickName: true,
                },
            },
        });

        if (post) {
            let images: string[] = getImagePath(post?.user?.email, post?.files);
            let result = { ...post, writer: post?.user.nickName, images };
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

        await postRepository.save(post);
        return true;
    } catch (error) {
        return false;
    }
};
