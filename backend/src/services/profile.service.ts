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

export const saveAbility = async (req: any) => {
    try {
        const {
            user: { email },
            body,
        } = req;

        const abilityObj = new Ability();
        abilityObj.name = body.name;
        abilityObj.address = body.address;
        abilityObj.position = body.position;
        abilityObj.start = body.start;
        abilityObj.end = body.end;
        abilityObj.user = email;
        if (body.id) abilityObj.id = body.id;

        const ability = await abilityRepository.save(abilityObj);

        return { ok: true, data: ability };
    } catch (error) {
        console.log(error);
        return { ok: false, data: error };
    }
};

export const removeAbility = async (req: any) => {
    try {
        const {
            user: { email },
            body: { id },
        } = req;

        await abilityRepository.delete({ id, user: { email } });

        return { ok: true, data: { id } };
    } catch (error) {
        return { ok: false, data: error };
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

        const schollObj = new School();
        schollObj.name = body.name;
        schollObj.start = body.start;
        schollObj.end = body.end;
        schollObj.status = body.status;
        schollObj.user = email;
        if (body.id) schollObj.id = body.id;

        const school = await schoolRepository.save(schollObj);

        return { ok: true, data: school };
    } catch (error) {
        return { ok: false, data: error };
    }
};

export const removeSchool = async (req: any) => {
    try {
        const {
            user: { email },
            body: { id },
        } = req;

        await schoolRepository.delete({ id, user: { email } });

        return { ok: true, data: { id } };
    } catch (error) {
        return { ok: false, data: error };
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

        const universityObj = new University();
        universityObj.name = body.name;
        universityObj.major = body.major;
        universityObj.degree = body.degree;
        universityObj.start = body.start;
        universityObj.end = body.end;
        universityObj.user = email;
        universityObj.status = body.status;
        if (body.id) universityObj.id = body.id;

        const university = await universityRepository.save(universityObj);

        return { ok: true, data: university };
    } catch (error) {
        return { ok: false, data: error };
    }
};

export const removeUniversity = async (req: any) => {
    try {
        const {
            user: { email },
            body: { id },
        } = req;

        await universityRepository.delete({ id, user: { email } });

        return { ok: true, data: { id } };
    } catch (error) {
        return { ok: false, data: error };
    }
};
