import { dataSource } from "../config/typeorm";
import { Post } from "../entity/Post.entity";
import { Likes } from "../entity/Likes.entity";
import { getImagePath } from "../utils/fileFunction";

const postRepository = dataSource.getRepository(Post);
const likesRepository = dataSource.getRepository(Likes);

export const find = async (id: number) => {
    try {
        const post = await postRepository.findOne({
            where: { id },
            relations: { user: true },
            select: {
                id: true,
                contents: true,
                createdAt: true,
                files: true,
                user: {
                    email: true,
                    nickName: true,
                    profileImage: true,
                },
            },
        });
        if (post) {
            let images: string[] = getImagePath(post?.user?.email, post?.files);
            let result = {
                id: post.id,
                contents: post.contents,
                createdAt: post.createdAt,
                writer: post.user.nickName,
                profileImage: post.user.profileImage,
                images,
            };
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

export const setLike = async (req: any) => {
    try {
        const {
            body: { postId },
            user: { email },
        } = req;
        const likes = new Likes();
        likes.user = email;
        likes.post = postId;

        const status = await likesRepository.findOne({
            relations: { user: true, post: true },
            where: {
                user: {
                    email,
                },
                post: { id: postId },
            },
        });
        if (status) {
            await likesRepository.delete({
                user: { email },
                post: { id: postId },
            });
        } else {
            await likesRepository.save(likes);
        }
        return true;
    } catch (error) {
        return false;
    }
};
