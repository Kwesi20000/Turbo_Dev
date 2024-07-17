import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://hendrickskumi0:SOLNman20@cluster0.lvdlz0v.mongodb.net/turbo').then(()=>console.log("DB connected"));
}