import Student from "../Models/student.schema.js";



export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find({}).populate('Mentor').exec((err, result) => {
            if (!err) {
                res.json(result)
            }
        });
        //res.send(students);
    } catch (err) {
        res.status(400).send(err);
    }
}
export const createStudents = async (req, res) => {
    const addStudent = new Student({
        "name" : req.body.name,
        "batch" : req.body.batch,
        "mentor" : req.body.mentor? req.body.mentor: undefined
     })
    try{
        const newStudent = await addStudent.save();
        res.send(newStudent)
    }catch(err){
        res.status(500);
        res.send(err);
    }
}
export const getNoMentorsStudent = async (req, res) => {
    const students = await Student.find({mentor:undefined})
    res.send(students);
        
} 
export const assignMentorById = async (req, res) => {
    const {id} = req.params;
    const {mentor} = req.body;
    try{
        const student = await Student.findById(id);
        student.mentor = mentor;
        await student.save();
        res.send(student);
    }catch(err){
        res.status(500);
        res.send(err);
    }
            
}
export const assignMentorStudents = async (req, res) => {
        const {mentor,stud_list} = req.body;
    console.log(stud_list)
    try{
        stud_list.map( async (stud_id) => {
            const student = await Student.findById(stud_id)
            student.mentor = mentor;
            await student.save();
        })
        res.send("Updated Successfully");  
    }catch(err){
        res.status(500);
        res.send(err);
    }
}
export const getAllStudentsByMentorId = async (req, res) => {
        const {id} = req.params;
    try{
        const students = await Student.find({mentor : id});
        res.send(students);
    }catch(err){
        res.send(err);
    }
}
    