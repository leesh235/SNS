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
    if (fs.existsSync(postDir)) {
        const files = fs.readdirSync(userDir);
        console.log(files);
    } else {
        fs.mkdirSync(postDir);
    }
};

export const getImagePath = (writer: string, post: string) => {
    const postDir = `${process.env.POST_PATH}/${writer}/${post}`;
    const basePath = `${process.env.BE_URL}/${writer}/${post}/`;

    let arr: string[] = [];
    const files = fs.readdirSync(postDir);
    files.forEach((val, idx) => {
        arr.push(`${basePath}${val}`);
    });
    return arr;
};

export const getAllImage = (
    email: string,
    posts: Array<{ id: number; files: string }>
) => {
    const basePath = `${process.env.BE_URL}/${email}/`;
    const userDir = `${process.env.POST_PATH}/${email}`;

    let arr: Array<{ id: number; image: string }> = [];
    const files = fs.readdirSync(userDir);
    files.reverse().forEach((val, idx) => {
        const images = fs.readdirSync(`${userDir}/${val}`);
        images.reverse().forEach((img, cnt) => {
            arr.push({ id: posts[idx].id, image: `${basePath}${val}/${img}` });
        });
    });
    return arr;
};

export const getTermsImage = (
    email: string,
    posts: Array<{ id: number; files: string }>
) => {
    const basePath = `${process.env.BE_URL}/${email}/`;
    const userDir = `${process.env.POST_PATH}/${email}`;

    let arr: Array<{ id: number; image: string }> = [];
    const files = fs.readdirSync(userDir);
    files.reverse().forEach((val, idx) => {
        const images = fs.readdirSync(`${userDir}/${val}`);
        images.reverse().forEach((img, cnt) => {
            if (arr.length < 6) {
                arr.push({
                    id: posts[idx].id,
                    image: `${basePath}${val}/${img}`,
                });
            }
        });
    });
    return arr;
};
