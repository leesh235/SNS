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
