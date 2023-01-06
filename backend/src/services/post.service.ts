import { dataSource } from "../config/typeorm";
import { Post } from "../entity/Post.entity";
import { Likes } from "../entity/Likes.entity";
import { FileUrl } from "../entity/file_url.entity";
import { deleteFile, fileNameFunc } from "../utils/fileFunction";
import { In, IsNull } from "typeorm";

const postRepository = dataSource.getRepository(Post);
const likesRepository = dataSource.getRepository(Likes);
const fileRepository = dataSource.getRepository(FileUrl);

export const find = async (req: any, paramId?: number) => {
    try {
        const {
            query: { postId },
            user: { email },
        } = req;
        const id = Number(postId) || paramId;

        const post = await postRepository.findOne({
            relations: {
                user: true,
                likes: true,
                fileUrl: true,
                comment: true,
            },
            where: {
                id,
            },
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
                comment: {
                    id: true,
                },
                likes: {
                    id: true,
                    user: {
                        email: true,
                    },
                },
                fileUrl: {
                    id: true,
                    fileName: true,
                    date: true,
                },
            },
            order: {
                createdAt: "desc",
            },
        });

        const like = await likesRepository.findOne({
            relations: { post: true, user: true },
            where: {
                post: { id },
                user: { email },
            },
            select: {
                id: true,
            },
        });

        if (post) {
            let images: any[] = [];
            post.fileUrl.forEach((val, idx) => {
                images.push({
                    id: val.id,
                    url: fileNameFunc(email, val),
                });
            });
            let result = {
                postId: post.id,
                userId: post.user.email,
                writer: post.user.nickName,
                profileImage: post.user.profileImage,
                contents: post.contents,
                createdAt: post.createdAt,
                images,
                files: post.files,
                likequantity: (post?.likes as any).length,
                commentquantity: (post?.comment as any).length,
                likeStatus: like === null ? false : true,
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

        const postSave = await postRepository.save(post);

        await fileRepository.update(
            { user: { email }, date },
            { post: { id: postSave.id } }
        );

        let result: any = await find(req, postSave.id);

        return { [postSave.id]: result };
    } catch (error) {
        return null;
    }
};

export const modify = async (req: any) => {
    try {
        const {
            user: { email },
            body: { postId, contents, urls, date },
            files,
        } = req;
        const id = Number(postId);
        const images = JSON.parse(urls);

        await postRepository.update({ id }, { contents });

        if (images.length !== 0) {
            deleteFile(images);
            const idArr = images.map((val: { id: number; url: string }) => {
                return val.id;
            });
            const result = await fileRepository.delete({
                user: { email },
                post: { id },
                id: In(idArr),
            });
            console.log("result: ", result);
        }

        if (files) {
            await fileRepository.update(
                { user: { email }, date, post: { id: IsNull() } },
                { post: { id } }
            );
        }

        let result: any = await find(req, id);

        return { id: [id], data: result };
    } catch (error) {
        console.log("modify: ", error);
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
            select: {
                id: true,
                user: { email: true },
                post: { id: true },
            },
        });

        let result: any = {};
        if (status) {
            await likesRepository.delete({
                user: { email },
                post: { id: postId },
            });
            result.postId = postId;
            result.status = false;
        } else {
            await likesRepository.save(likes);
            result.postId = postId;
            result.status = true;
        }

        const quantity = await likesRepository.count({
            relations: {
                post: true,
            },
            where: {
                post: {
                    id: postId,
                },
            },
            select: {
                id: true,
                post: {},
            },
        });

        result.quantity = quantity;

        return result;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const remove = async (req: any) => {
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

        return { id: postId };
    } catch (error) {
        console.log(error);
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
        files.fileName = fileName;
        files.user = email;
        files.date = date;

        const result = await fileRepository.save(files);
        req.fileId = result.id;
        return result.id;
    } catch (error) {
        return null;
    }
};
