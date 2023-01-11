import { dataSource } from "../config/typeorm";
import { Files } from "../entity/files.entity";
import { User } from "../entity/user.entity";
import { Ability } from "../entity/ability.entity";
import { School } from "../entity/school.entity";
import { University } from "../entity/university.entity";

const userRepository = dataSource.getRepository(User);
const fileRepository = dataSource.getRepository(Files);
const abilityRepository = dataSource.getRepository(Ability);
const schoolRepository = dataSource.getRepository(School);
const universityRepository = dataSource.getRepository(University);

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

        if (!file) return false;

        await userRepository.update({ email }, { coverImage: file?.imageUrl });

        return { coverImage: file?.imageUrl };
    } catch (error) {
        return false;
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

        if (!file) return false;

        await userRepository.update(
            { email },
            { profileImage: file?.imageUrl }
        );

        return { profileImage: file?.imageUrl };
    } catch (error) {
        return false;
    }
};

export const saveIntroduce = async (req: any) => {
    try {
        const {
            user: { email },
            body,
        } = req;

        await userRepository.update({ email }, { ...body });

        return body;
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const saveAbility = async (req: any) => {
    try {
        const {
            user: { email },
            body,
        } = req;

        const find = await abilityRepository.findOne({
            where: { user: { email } },
        });

        if (find) {
            await abilityRepository.update({ id: find.id }, { ...body });

            return body;
        } else {
            const abilityObj: Ability = {
                user: email,
                ...body,
            };

            const ability = await abilityRepository.save(abilityObj);

            return ability;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
};

export const removeAbility = async (req: any) => {
    try {
        const {
            user: { email },
            body: { id },
        } = req;

        await abilityRepository.delete({ id, user: { email } });

        return { name: "", position: "", address: "", start: "", end: "" };
    } catch (error) {
        return false;
    }
};

export const saveSchool = async (req: any) => {
    try {
        const {
            user: { email },
            body,
        } = req;

        const find = await schoolRepository.findOne({
            where: { user: { email } },
        });

        if (find) {
            await schoolRepository.update({ id: find.id }, { ...body });
            return body;
        } else {
            const schollObj: School = {
                user: email,
                ...body,
            };

            const school = await schoolRepository.save(schollObj);

            return school;
        }
    } catch (error) {
        return false;
    }
};

export const removeSchool = async (req: any) => {
    try {
        const {
            user: { email },
            body: { id },
        } = req;

        await schoolRepository.delete({ id, user: { email } });

        return { name: "", status: "", start: "", end: "" };
    } catch (error) {
        return false;
    }
};

export const saveUniversity = async (req: any) => {
    try {
        const {
            user: { email },
            body,
        } = req;

        const find = await universityRepository.findOne({
            where: { user: { email } },
        });

        if (find) {
            await universityRepository.update({ id: find.id }, { ...body });
            return body;
        } else {
            const universityObj: University = {
                user: email,
                ...body,
            };

            const university = await universityRepository.save(universityObj);

            return university;
        }
    } catch (error) {
        return false;
    }
};

export const removeUniversity = async (req: any) => {
    try {
        const {
            user: { email },
            body: { id },
        } = req;

        await universityRepository.delete({ id, user: { email } });

        return { name: "", marjor: "", degree: "", start: "", end: "" };
    } catch (error) {
        return false;
    }
};
