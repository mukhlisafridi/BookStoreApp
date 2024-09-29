import mongoose from 'mongoose';

export const connectionDB = () => {
    mongoose.connect(process.env.MONGO_URI)
        .then(() => {
            console.log("dataBase connected");
        })
        .catch((error) => {
            console.log("Database connection error: ", error);
        });
};
