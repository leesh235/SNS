import { dataSource } from "../config/typeorm";
import { Post } from "../entity/Post.entity";
import { getImagePath } from "../utils/fileFunction";

const postRepository = dataSource.getRepository(Post);

export const findAll = async () => {
    try {
        const allList = await postRepository.find({
            where: { deletedAt: undefined },
            select: {
                writer: true,
                contents: true,
                createdAt: true,
                files: true,
            },
        });
        let result: any[] = [];
        for (let i = 0; i < allList.length; i++) {
            const { writer, contents, createdAt, files } = allList[i];
            let images: string[] = getImagePath(writer, files);
            result.push({ writer, contents, createdAt, images });
        }
        return result;
    } catch (error) {
        return [];
    }
};
