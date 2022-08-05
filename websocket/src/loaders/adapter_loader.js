import mongoose from "mongoose";
import { createAdapter } from "@socket.io/mongo-adapter";

export default async (io) =>
    await mongoose.connection.createCollection(
        "ctartCapped",
        {
            capped: true,
            size: 1e6,
        },
        (err, db) => {
            if (err.code === 48) {
                io.adapter(
                    createAdapter(mongoose.connection.collection("ctartCapped"))
                );
                return;
            } else io.adapter(createAdapter(db));
        }
    );
