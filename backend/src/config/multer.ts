import multer from "multer";
import path from "path";
import fs from "fs-extra";
import { v4 as uuidv4 } from "uuid";
import { mikdirUtil } from "../utils/fileUtil";

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const date = new Date();
        const yearDir = `${process.env.FILE_PATH}/${date.getFullYear()}`;
        const fileDir = `${process.env.FILE_PATH}/${date.getFullYear()}/${
            date.getMonth() + 1
        }`;

        mikdirUtil(yearDir);
        mikdirUtil(fileDir);

        cb(null, fileDir);
    },
    filename: (req, file, cb) => {
        const uuid = uuidv4();
        const ext = path.extname(file.originalname);
        cb(null, `${uuid}.${ext}`);
    },
});

export let uploads = multer({ storage: storage });
