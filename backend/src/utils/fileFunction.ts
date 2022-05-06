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

export const deleteFile = (req: any) => {
    const {
        body: { urls },
    } = req;
    const images = JSON.parse(urls);

    images.forEach((url: string) => {
        let imgPath = `${process.env.POST_PATH}${url.split("5000")[1]}`;
        let dirId = url.split("/")[4];
        let dirPath = `${imgPath.split(dirId)[0]}${dirId}`;
        if (fs.readFileSync(imgPath)) {
            fs.unlinkSync(imgPath);
        }
        if (fs.readdirSync(dirPath).length === 0) {
            fs.removeSync(dirPath);
        }
    });
};
