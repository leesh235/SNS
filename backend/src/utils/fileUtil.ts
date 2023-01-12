import fs from "fs-extra";

export const mikdirUtil = (path: string) => {
    if (!fs.existsSync(path)) fs.mkdirSync(path);
};

export const deleteFileUtil = (files: any) => {
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
