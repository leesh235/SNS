import { dataSource } from "../config/typeorm";
import { User } from "../entity/user.entity";
import { University } from "../entity/university.entity";
import { Ability } from "../entity/ability.entity";
import { School } from "../entity/school.entity";
import { Post } from "../entity/post.entity";
import { Files } from "../entity/files.entity";
import { Likes } from "../entity/likes.entity";
import { Comment } from "../entity/comment.entity";
import { IsNull, Not } from "typeorm";

const userRepository = dataSource.getRepository(User);
const abilityRepository = dataSource.getRepository(Ability);
const universityRepository = dataSource.getRepository(University);
const schoolRepository = dataSource.getRepository(School);
const postRepository = dataSource.getRepository(Post);
const filesRepository = dataSource.getRepository(Files);
const likesRepository = dataSource.getRepository(Likes);
const commentRepository = dataSource.getRepository(Comment);

export const getProfile = async (req: any) => {
    try {
        const {
            query: { email },
        } = req;

        const find = await userRepository.findOne({
            where: {
                email,
                deletedAt: undefined,
            },
            select: {
                email: true,
                nickName: true,
                coverImage: true,
                profileImage: true,
                introduce: true,
                gender: true,
                birth: true,
                createdAt: true,
            },
        });

        return { ok: true, data: find };
    } catch (error) {
        return { ok: false, data: error };
    }
};

export const getInfo = async (req: any) => {
    try {
        const {
            query: { email },
        } = req;

        const ability = await abilityRepository.findOne({
            where: { user: { email } },
            select: {
                id: true,
                name: true,
                position: true,
                address: true,
                start: true,
                end: true,
            },
        });
        const university = await universityRepository.findOne({
            where: { user: { email } },
            select: {
                id: true,
                name: true,
                major: true,
                degree: true,
                start: true,
                end: true,
            },
        });
        const school = await schoolRepository.findOne({
            where: { user: { email } },
            select: {
                id: true,
                name: true,
                status: true,
                start: true,
                end: true,
            },
        });

        return { ok: true, data: { ability, school, university } };
    } catch (error) {
        return { ok: false, data: error };
    }
};

//수정예정
export const getPosts = async (req: any) => {
    try {
        const {
            query: { email },
            body: { take },
        } = req;

        const posts = await postRepository.find({
            relations: {
                comment: true,
                likes: true,
                files: true,
            },
            where: { user: { email }, deletedAt: undefined },
            select: {
                id: true,
                contents: true,
                createdAt: true,
                comment: { id: true },
                likes: { id: true },
                files: { id: true, imageUrl: true },
            },
            take,
        });

        return { ok: true, data: posts };
    } catch (error) {
        return { ok: false, data: error };
    }
};

export const getImages = async (req: any) => {
    try {
        const {
            query: { email },
        } = req;

        const files = await filesRepository.find({
            where: { user: { email }, post: { id: Not(IsNull()) } },
            select: {
                id: true,
                imageUrl: true,
                post: {
                    id: true,
                },
            },
        });

        const returnValue: any[] = files.map((file) => {
            return { id: file.id, url: file.imageUrl, postId: file.post.id };
        });

        return { ok: true, data: returnValue };
    } catch (error) {
        return { ok: false, data: error };
    }
};
