import { Between, IsNull } from "typeorm";
import { dataSource } from "../config/typeorm";
import { Files } from "../entity/files.entity";
import { deleteFileUtil } from "../utils/fileUtil";
import { lastDayList } from "../utils/dateUtil";
import { Grade } from "../config/enums";

const fileRepository = dataSource.getRepository(Files);

export const fileUpload = async (req: any) => {
    try {
        const { file } = req;

        const fileObj = new Files();
        fileObj.fileName = file.filename;
        fileObj.originamName = file.originalname;
        fileObj.destination = file.destination;
        fileObj.imageUrl = `${process.env.BE_URL}/${file.destination}/${file.filename}`;

        const result = await fileRepository.save(fileObj);

        return { id: result.id, url: fileObj.imageUrl };
    } catch (error) {
        return false;
    }
};

export const fileArrayUpload = async (req: any) => {
    try {
        const { files } = req;

        const newFIles: Files[] = [];
        for (let file of files) {
            const fileObj = new Files();
            fileObj.fileName = file.filename;
            fileObj.originamName = file.originalname;
            fileObj.destination = file.destination;
            fileObj.imageUrl = `${process.env.BE_URL}/${file.destination}/${file.filename}`;
            newFIles.push(fileObj);
        }

        const result = await fileRepository.save(newFIles);

        let returnValue: any[] = [];
        for (let val of result)
            returnValue.push({ id: val.id, url: val.imageUrl });

        return returnValue;
    } catch (error) {
        return false;
    }
};

export const remove = async (req: any) => {
    try {
        const { user } = req;

        if (user.grade !== Grade.ADMIN) return false;

        const dt = new Date();
        const year = dt.getFullYear();
        const month = dt.getMonth();
        const lastDay = lastDayList[month];

        const find = await fileRepository.find({
            where: {
                user: IsNull(),
                post: IsNull(),
                createdAt: Between(
                    new Date(year, month, 1),
                    new Date(year, month, lastDay)
                ),
            },
        });

        if (!deleteFileUtil(find)) return false;

        await fileRepository.delete({
            user: { email: IsNull() },
            post: { id: IsNull() },
        });

        return true;
    } catch (error) {
        return false;
    }
};
