import { dataSource } from "../config/typeorm";
import { Post } from "../entity/Post.entity";
import { Likes } from "../entity/Likes.entity";
import { FileUrl } from "../entity/file_url.entity";

const postRepository = dataSource.getRepository(Post);
const likesRepository = dataSource.getRepository(Likes);
const fileRepository = dataSource.getRepository(FileUrl);

export const find = async (id: number) => {
    try {
        const post = await postRepository.findOne({
            where: { id },
            relations: { user: true, fileUrl: true },
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
                fileUrl: {
                    id: true,
                    fileUrl: true,
                },
            },
        });

        if (post) {
            let images: any[] = [];
            post.fileUrl.forEach((val, idx) => {
                images.push(val.fileUrl);
            });
            let result = {
                id: post.id,
                contents: post.contents,
                createdAt: post.createdAt,
                writer: post.user.nickName,
                profileImage: post.user.profileImage,
                images,
            };
            console.log(result);
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

        const result = await postRepository.save(post);

        await dataSource
            .createQueryBuilder()
            .update(FileUrl)
            .set({ post: { id: result.id } })
            .where({ user: { email }, date })
            .execute();

        return result.id;
    } catch (error) {
        return null;
    }
};

export const modify = async (req: any) => {
    try {
        const {
            user: { email },
            body: { postId, contents },
        } = req;

        await dataSource
            .createQueryBuilder()
            .update(Post)
            .set({ contents })
            .where({ user: { email }, id: postId })
            .execute();

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

export const save_file = async (req: any, fileName: string) => {
    try {
        const {
            user: { email },
            body: { date },
        } = req;

        const files = new FileUrl();
        files.fileUrl = `${process.env.BE_URL}/${email}/${date}/${fileName}`;
        files.user = email;
        files.date = date;

        const result = await fileRepository.save(files);

        return result.id;
    } catch (error) {
        return null;
    }
};

export const modify_file = async (req: any, postId: number) => {
    try {
        return true;
    } catch (error) {
        return false;
    }
};
