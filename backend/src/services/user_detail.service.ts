import { dataSource } from "../config/typeorm";
import { User } from "../entity/user.entity";
import { University } from "../entity/university.entity";
import { Ability } from "../entity/ability.entity";
import { School } from "../entity/school.entity";

const userRepository = dataSource.getRepository(User);
const userAbilityRepository = dataSource.getRepository(Ability);
const userUniversityRepository = dataSource.getRepository(University);
const userSchoolRepository = dataSource.getRepository(School);

export const findInfo = async (req: any) => {
    try {
        const {
            user: { email },
        } = req;

        const find = await userRepository.findOne({
            where: {
                email,
            },
            select: {
                number: true,
                address: true,
                email: true,
                birth: true,
                gender: true,
            },
        });

        if (find) return find;
        else
            return {
                number: null,
                address: null,
                email: null,
                gender: null,
                birth: null,
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

        const ability = new Ability();
        ability.name = name;
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

        const university = new University();
        university.name = name;
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

        const userSchool = new School();
        userSchool.name = name;
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

        await userRepository.update({ email }, { number });

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

        await userRepository.update({ email }, { address });

        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const deleteUserInfo = async (
    req: any,
    mode: "ability" | "university" | "school"
) => {
    try {
        const {
            user: { email },
            body: { id },
        } = req;

        if (mode === "ability") {
            await userAbilityRepository.delete({ id, user: { email } });
            return true;
        }
        if (mode === "university") {
            await userUniversityRepository.delete({ id, user: { email } });
            return true;
        }

        if (mode === "school") {
            await userSchoolRepository.delete({ id, user: { email } });
            return true;
        }

        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
};
