import mongoose from "mongoose";

const { MONGODB_URL, DB_NAME } = process.env;

export default mongoose.connect(
    `${MONGODB_URL}`,
    { dbName: `${DB_NAME}` },
    (error, _db) => {
        if (error) throw error;
        console.log("connect mongodb");
    }
);
