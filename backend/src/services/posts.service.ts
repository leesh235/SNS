import { dataSource } from "../config/typeorm";
import { Post } from "../entity/Post.entity";
import { getImagePath } from "../utils/fileFunction";

const postRepository = dataSource.getRepository(Post);

export const findAll = async () => {
    try {
        const allList = await postRepository.find({
            relations: {
                user: true,
            },
            where: { deletedAt: undefined },
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
        let result: any[] = [];
        for (let i = 0; i < allList.length; i++) {
            const {
                contents,
                createdAt,
                files,
                user: { email, nickName },
            } = allList[i];
            let images: string[] = getImagePath(email, files);
            result.push({ writer: nickName, contents, createdAt, images });
        }
        return result;
    } catch (error) {
        return [];
    }
};
