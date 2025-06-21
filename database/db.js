import mongoose  from "mongoose";
export const connectDB = async () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName : "MERN stack Library Management System"
    }).then(() => {
        console.log("Database Connected Succesfully");
    }).catch((err) => {
        console.log(err);
    })
} 