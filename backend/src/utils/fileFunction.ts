import fs from "fs-extra";

export const existFile = async (req: any, file: any) => {
    const { email } = req.user;
    const userDir = `${process.env.FILE_PATH}/${email}`;
    if (fs.existsSync(userDir)) {
        const files = fs.readdirSync(userDir);
        files.forEach((val, idx) => {
            if (val.split("_")[0] === req.body.mode) {
                fs.removeSync(userDir + "/" + val);
            }
        });
    } else {
        fs.mkdirSync(`${process.env.FILE_PATH}/${email}`);
    }
};

export const getFilePath = (req: any) => {
    const { mode } = req.body;
    const { email } = req.user;
    const userDir = `${process.env.FILE_PATH}/${email}`;
    let filePath = "";
    const files = fs.readdirSync(userDir);
    files.forEach((val, idx) => {
        if (val.split("_")[0] === mode) {
            filePath = val;
        }
    });

    return `${process.env.BE_URL}/${email}/${filePath}`;
};

export const mikdirPosts = (req: any) => {
    const { email } = req.user;
    const { date } = req.body;

    const userDir = `${process.env.POST_PATH}/${email}`;
    const postDir = `${process.env.POST_PATH}/${email}/${date}`;
    if (!fs.existsSync(userDir)) {
        fs.mkdirSync(userDir);
    }
    if (!fs.existsSync(postDir)) {
        fs.mkdirSync(postDir);
    }
};

export const deleteFile = (files: any) => {
    const dirPath = `${files[0].destination}`;
    if (fs.readdirSync(dirPath).length === 0) {
        fs.removeSync(dirPath);
        return false;
    } else {
        files.forEach((file: any) => {
            const imgPath = `${file.destination}/${file.fileName}`;
            if (fs.readFileSync(imgPath)) {
                fs.unlinkSync(imgPath);
            }
        });
        return true;
    }
};

export const fileNameFunc = (
    email: string,
    file: { id: number; date: string; fileName: string }
) => {
    return `${process.env.BE_URL}/${email}/${file.date}/${file.id}_${file.fileName}`;
};
