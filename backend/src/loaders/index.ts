import express from "express";
import expressLoader from "./express_loader";
import dbLoader from "./db_loader";

export default async ({ expressApp }: { expressApp: express.Application }) => {
    await dbLoader;
    await expressLoader({ app: expressApp });
};
