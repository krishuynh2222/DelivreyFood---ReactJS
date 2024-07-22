import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://krishuynh2222:654123@cluster0.4v12ycz.mongodb.net/DELIVERYFOOD-REACTJS').then(() => console.log("DB Connected"))
}

