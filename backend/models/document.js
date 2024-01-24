import mongoose  from 'mongoose'

const documents = new mongoose.Schema({
    doc:String,
    filename:String,
    discription:String
},{
    timestamps:true
});
export default mongoose.model("document",documents);