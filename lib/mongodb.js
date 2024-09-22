import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Verbunden mit der Datenbank")
    } catch(error){
        console.log("Einfehler ist beim Verbinden mit der Datenbank aufgetreten")
    }
}