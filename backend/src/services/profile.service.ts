import { dataSource } from "../config/typeorm";
import { Files } from "../entity/files.entity";
import { User } from "../entity/user.entity";

const userRepository = dataSource.getRepository(User);
const fileRepository = dataSource.getRepository(Files);

export const saveCoverImage = async (req: any) => {
    try {
        const {
            user: { email },
            body: { id },
        } = req;

        const file = await fileRepository.findOne({
            where: { id },
            select: { id: true, imageUrl: true },
        });

        if (!file) return { ok: false, data: { coverImage: "" } };

        await userRepository.update({ email }, { coverImage: file?.imageUrl });

        return { ok: true, data: { coverImage: file?.imageUrl } };
    } catch (error) {
        return { ok: false, data: error };
    }
};

export const saveProfileImage = async (req: any) => {
    try {
        const {
            user: { email },
            body: { id },
        } = req;

        const file = await fileRepository.findOne({
            where: { id },
            select: { id: true, imageUrl: true },
        });

        if (!file) return { ok: false, data: { profileImage: "" } };

        await userRepository.update(
            { email },
            { profileImage: file?.imageUrl }
        );

        return { ok: true, data: { profileImage: file?.imageUrl } };
    } catch (error) {
        return { ok: false, data: error };
    }
};

export const saveIntroduce = async (req: any) => {
    try {
        const {
            user: { email },
            body,
        } = req;

        await userRepository.update({ email }, { ...body });

        return { ok: true, data: body };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};

export const getLatestImage = async (req: any) => {
    try {
        const { user } = req;

        const latestImgArr = await fileRepository.find({
            where: { post: { user: user.email, deletedAt: undefined } },
            select: {
                id: true,
                imageUrl: true,
                post: {
                    id: true,
                },
            },
            take: 6,
        });

        const returnValue: any[] = latestImgArr.map((val) => {
            return { id: val.id, postId: val.post.id, url: val.imageUrl };
        });

        return { ok: true, data: returnValue };
    } catch (error) {
        return { ok: false, data: error };
    }
};

export const getAllImage = async (req: any) => {
    try {
        const {
            user,
            query: { take },
        } = req;

        const allImgArr = await fileRepository.find({
            where: { post: { user: user.email, deletedAt: undefined } },
            select: {
                id: true,
                imageUrl: true,
                post: {
                    id: true,
                },
            },
            take: take || 6,
        });

        const returnValue: any[] = allImgArr.map((val) => {
            return { id: val.id, postId: val.post.id, url: val.imageUrl };
        });

        return { ok: true, data: returnValue };
    } catch (error) {
        return { ok: false, data: error };
    }
};
