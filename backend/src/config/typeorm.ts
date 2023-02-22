import "reflect-metadata";
import { DataSource } from "typeorm";
import { entities } from "./route";

export const dataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: "utf8mb4", //schema character set
    synchronize: false, //테이블 생성여부 확인(처음 한번 생성 후 false로 해야한다.)
    logging: false, // 로깅 여부
    entities: [`${entities}`],
    migrations: [],
    subscribers: [],
});
