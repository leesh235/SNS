import { dataSource } from "../config/typeorm";
import { Post } from "../entity/Post.entity";
import { Likes } from "../entity/Likes.entity";
import { FileUrl } from "../entity/file_url.entity";
import { deleteFile } from "../utils/fileFunction";
import { In, IsNull } from "typeorm";

const postRepository = dataSource.getRepository(Post);
const likesRepository = dataSource.getRepository(Likes);
const fileRepository = dataSource.getRepository(FileUrl);

export const find = async (id: number) => {
    try {
        const post = await postRepository.findOne({
            where: { id, deletedAt: undefined },
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
                images.push({ id: val.id, url: val.fileUrl });
            });
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
        console.log(error);
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
            body: { postId, contents, urls, date },
        } = req;
        const id = Number(postId);
        const images = JSON.parse(urls);

        await postRepository.update({ id }, { contents });

        if (images.length !== 0) {
            deleteFile(req);
            await fileRepository.delete({
                user: { email },
                fileUrl: In(images),
            });
        }

        await dataSource
            .createQueryBuilder()
            .update(FileUrl)
            .set({ post: { id } })
            .where({ user: { email }, date, post: { id: IsNull() } })
            .execute();

        return true;
    } catch (error) {
        console.log(error);
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

export const delete_post = async (req: any) => {
    try {
        const {
            query: { postId },
            user: { email },
        } = req;
        const id = Number(postId);

        await postRepository.softDelete({
            id,
            user: { email },
        });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const findCommentCount = async (req: any) => {
    try {
        const {
            query: { postId },
        } = req;

        const result = await postRepository.find({
            relations: { comment: true },
            where: {
                id: Number(postId),
                deletedAt: undefined,
                comment: { deletedAt: undefined },
            },
            select: {
                id: true,
                comment: {
                    id: true,
                },
            },
        });
        console.log(result);
        return result.length;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const findLikeCount = async (req: any) => {
    try {
        const {
            query: { postId },
        } = req;

        const result = await postRepository.find({
            relations: { likes: true },
            where: {
                id: Number(postId),
                deletedAt: undefined,
            },
            select: {
                id: true,
                likes: {
                    id: true,
                },
            },
        });
        console.log(result);
        return result.length;
    } catch (error) {
        console.log(error);
        return false;
    }
};
