import express_loader from "./express_loader";
import db_loader from "./db_loader";

export default async (app) => {
    // await db_loader;
    await express_loader(app);
};
