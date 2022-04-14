import { dataSource } from "../config/typeorm";
import { Post } from "../entity/Post.entity";

const postRepository = dataSource.getRepository(Post);

export const find = async (id: number) => {
    try {
        const post = await postRepository.findOne({ where: { id } });
        if (post) {
            return post;
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
};
