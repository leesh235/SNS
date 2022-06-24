import { dataSource } from "../config/typeorm";
import { UserInfo } from "../entity/User_Info.entity";
import { UserAbiliy } from "../entity/User_ability";
import { UserUniversity } from "../entity/User_university";
import { UserSchool } from "../entity/User_school";

const userInfoRepository = dataSource.getRepository(UserInfo);
const userAbilityRepository = dataSource.getRepository(UserAbiliy);
const userUniversityRepository = dataSource.getRepository(UserUniversity);
const userSchoolRepository = dataSource.getRepository(UserSchool);

export const findInfo = async (req: any) => {
    try {
        const {
            user: { email },
        } = req;

        const find = await userInfoRepository.findOne({
            relations: { user: true },
            where: {
                user: { email },
            },
            select: {
                id: true,
                number: true,
                address: true,
                user: {
                    email: true,
                    birth: true,
                    gender: true,
                },
            },
        });

        return {
            number: find?.number,
            address: find?.address,
            email: find?.user.email,
            gender: find?.user.gender,
            birth: find?.user.birth,
        };
    } catch (error) {
        console.log(error);
        return {};
    }
};

export const findAbility = async (req: any) => {
    try {
        const {
            user: { email },
        } = req;

        const setting = {
            relations: {
                user: true,
            },
            where: {
                user: {
                    email,
                },
            },
            select: {
                user: {},
            },
        };

        const ability = await userAbilityRepository.findOne(setting);
        const university = await userUniversityRepository.findOne(setting);
        const school = await userSchoolRepository.findOne(setting);

        console.log(ability);
        console.log(university);
        console.log(school);

        return { ability, university, school };
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const saveAbility = async (req: any) => {
    try {
        const {
            user: { email },
            body: { name, position, address, startDate, endDate },
        } = req;

        const ability = new UserAbiliy();
        ability.job = name;
        ability.position = position;
        ability.address = address;
        ability.start = startDate;
        ability.end = endDate;
        ability.user = email;

        const find = await userAbilityRepository.findOne({
            relations: { user: true },
            where: {
                user: { email },
            },
        });

        if (find) await userAbilityRepository.delete({ id: find.id });

        await userAbilityRepository.save(ability);

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const saveUniversity = async (req: any) => {
    try {
        const {
            user: { email },
            body: { name, major, degree, startDate, endDate, status },
        } = req;

        const university = new UserUniversity();
        university.university = name;
        university.major = major;
        university.degree = degree;
        university.status = status;
        university.start = startDate;
        university.end = endDate;
        university.user = email;

        const find = await userUniversityRepository.findOne({
            relations: { user: true },
            where: {
                user: {
                    email,
                },
            },
        });

        if (find) await userUniversityRepository.delete({ id: find.id });

        await userUniversityRepository.save(university);

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const saveSchool = async (req: any) => {
    try {
        const {
            user: { email },
            body: { name, startDate, endDate, status },
        } = req;

        const userSchool = new UserSchool();
        userSchool.school = name;
        userSchool.status = status;
        userSchool.start = startDate;
        userSchool.end = endDate;
        userSchool.user = email;

        const find = await userSchoolRepository.findOne({
            relations: {
                user: true,
            },
            where: {
                user: { email },
            },
        });

        if (find) await userSchoolRepository.delete({ id: find.id });

        await userSchoolRepository.save(userSchool);

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const saveNumber = async (req: any) => {
    try {
        const {
            user: { email },
            body: { number },
        } = req;
        const userInfo = new UserInfo();
        userInfo.number = number;
        userInfo.user = email;

        const find = await userInfoRepository.findOne({
            relations: { user: true },
            where: {
                user: {
                    email,
                },
            },
        });

        let result: any;
        if (find) {
            result = await userInfoRepository.update(
                { id: find.id },
                { number }
            );
        } else {
            result = await userInfoRepository.save(userInfo);
        }

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const saveAddress = async (req: any) => {
    try {
        const {
            user: { email },
            body: { address },
        } = req;
        const userInfo = new UserInfo();
        userInfo.address = address;
        userInfo.user = email;

        const find = await userInfoRepository.findOne({
            relations: { user: true },
            where: {
                user: {
                    email,
                },
            },
        });

        let result: any;
        if (find) {
            result = await userInfoRepository.update(
                { id: find.id },
                { address }
            );
        } else {
            result = await userInfoRepository.save(userInfo);
        }
        console.log(result);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};
