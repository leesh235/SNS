import { dataSource } from "../config/typeorm";
import { Files } from "../entity/files.entity";
import { User } from "../entity/user.entity";
import { EmaileReqDto } from "../dto/common/email.dto";
import { ProfileResDto, ImgResDto, AllImgReqDto } from "../dto/profile.dto";

const userRepository = dataSource.getRepository(User);
const fileRepository = dataSource.getRepository(Files);

export const findUser = async (dto: EmaileReqDto) => {
    try {
        const user = dto.toEntity();

        const findOne = await userRepository.findOne({
            where: { email: user.email },
            select: {
                email: true,
                nickName: true,
                gender: true,
                birth: true,
                createdAt: true,
                introduce: true,
                coverImage: true,
                profileImage: true,
            },
        });

        if (!findOne) return { message: "존재하지 않는 유저입니다." };

        const profileResDto = new ProfileResDto(
            findOne.email,
            findOne.nickName,
            findOne.gender,
            findOne.birth,
            `${findOne.createdAt}`,
            findOne.introduce,
            findOne.coverImage,
            findOne.profileImage
        );

        return profileResDto;
    } catch (error) {
        console.log(error);
        return error;
    }
};

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

export const getLatestImage = async (dto: EmaileReqDto) => {
    try {
        const user = dto.toEntity();

        const latestImgArr = await fileRepository.find({
            where: {
                post: {
                    user: { email: user.email, deletedAt: undefined },
                    deletedAt: undefined,
                },
            },
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

        const resultDto = new ImgResDto(returnValue);

        return resultDto.imgList;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const getAllImage = async (dto: AllImgReqDto) => {
    try {
        const user = dto.toEntity();

        const allImgArr = await fileRepository.find({
            where: {
                post: {
                    user: { email: user.email, deletedAt: undefined },
                    deletedAt: undefined,
                },
            },
            select: {
                id: true,
                imageUrl: true,
                post: {
                    id: true,
                },
            },
            take: dto.take,
        });

        const returnValue: any[] = allImgArr.map((val) => {
            return { id: val.id, postId: val.post.id, url: val.imageUrl };
        });

        const resultDto = new ImgResDto(returnValue);

        return resultDto.imgList;
    } catch (error) {
        console.log(error);
        return error;
    }
};
