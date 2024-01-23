import mongoose  from 'mongoose'

const users = new mongoose.Schema({
    username:String,
    password:String
},{
    timestamps:true
})
export default mongoose.model("user", users);