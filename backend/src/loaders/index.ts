import express from "express";
import expressLoader from "./express_loader";
import dbLoader from "./db_loader";
import redisLoader from "./redis_loader";

export default async ({ expressApp }: { expressApp: express.Application }) => {
    await dbLoader;
    await redisLoader;
    await expressLoader({ app: expressApp });
};
