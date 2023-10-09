import mongoose from "mongoose";


const studentSchema = new mongoose.Schema({
    name: String,
    batch: String,
    mentor:String

})

const Student = mongoose.model('Student', studentSchema)
export default Student;


