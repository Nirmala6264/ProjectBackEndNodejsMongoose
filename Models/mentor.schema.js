import mongoose from "mongoose";


const mentorSchema = new mongoose.Schema({
    
name: String,
    email: String,
    course:String
})

const Mentor = mongoose.model('Mentor', mentorSchema)
export default Mentor;