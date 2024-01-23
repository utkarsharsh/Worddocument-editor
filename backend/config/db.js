import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
 export const connectDB=async()=>{
    console.log("try one");
    try {
        const conn=await mongoose.connect("mongodb+srv://harshupadhyay7786:mnbvcxz@cluster0.ypptwdf.mongodb.net/final",{
        })
        console.log('MongoDB connected',conn.connection.host)
    } catch (err) {
        console.log('Error:',err.message)
        process.exit(1);
    }
}
