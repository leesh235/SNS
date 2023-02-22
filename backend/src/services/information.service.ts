import { dataSource } from "../config/typeorm";
import { Ability } from "../entity/ability.entity";
import { School } from "../entity/school.entity";
import { University } from "../entity/university.entity";
import { EmaileReqDto } from "../dto/common/email.dto";

const abilityRepository = dataSource.getRepository(Ability);
const schoolRepository = dataSource.getRepository(School);
const universityRepository = dataSource.getRepository(University);

export const findInfo = async (req: any) => {
    try {
        const { user, query } = req;

        const email = query?.email ? query.email : user.email;

        const ability = await abilityRepository.findOne({
            relations: { user: true },
            where: {
                user: {
                    email,
                },
            },
            select: {
                user: {},
            },
        });

        const school = await schoolRepository.findOne({
            relations: { user: true },
            where: {
                user: { email: user.email },
            },
            select: {
                user: {},
            },
        });

        const university = await universityRepository.findOne({
            relations: { user: true },
            where: {
                user: { email: user.email },
            },
            select: {
                user: {},
            },
        });

        return { ability, school, university };
    } catch (error) {
        console.log(error);
        return error;
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

        let ability: any;
        const findOne = await abilityRepository.findOne({
            relations: { user: true },
            where: { user: { email: email } },
        });
        if (findOne) {
            ability = await abilityRepository.update(
                { user: email },
                abilityObj
            );
        } else {
            abilityObj.user = email;
            ability = await abilityRepository.save(abilityObj);
        }

        return true;
    } catch (error) {
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

        return true;
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

        const schollObj = new School();
        schollObj.name = body.name;
        schollObj.start = body.start;
        schollObj.end = body.end;
        schollObj.status = body.status;
        schollObj.user = email;

        let school: any;
        const findOne = await schoolRepository.findOne({
            relations: { user: true },
            where: { user: { email: email } },
        });
        if (findOne)
            school = await schoolRepository.update({ user: email }, schollObj);
        else {
            schollObj.user = email;
            school = await schoolRepository.save(schollObj);
        }

        return true;
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

        return true;
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

        const universityObj = new University();
        universityObj.name = body.name;
        universityObj.major = body.major;
        universityObj.degree = body.degree;
        universityObj.start = body.start;
        universityObj.end = body.end;
        universityObj.user = email;
        universityObj.status = body.status;

        let university: any;
        const findOne = await universityRepository.findOne({
            relations: { user: true },
            where: { user: { email: email } },
        });
        if (findOne)
            university = await universityRepository.update(
                { user: email },
                universityObj
            );
        else {
            universityObj.user = email;
            university = await universityRepository.save(universityObj);
        }

        return true;
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

        return true;
    } catch (error) {
        return false;
    }
};
