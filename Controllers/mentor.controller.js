import Mentor from "../Models/mentor.schema.js";


export const getAllMentors = async (req, res) => {
    try{
        const mentors = await Mentor.find();
        res.status(200).json(mentors);
    }catch(err){
        res.status(400).send(err);
    }
}
export const createMentor = async (req, res) => {
    // try {
    //     const{name,email,course} = new Mentor(req.body)
    //             const newMentor= await newMentor.save()
    //     res.status(200).json(newMentor)             
    // } catch (error) {
    //     res.status(500).json({error:"error in create mentor"})
    // }
    
    const {name,email,course} = req.body;
    const addMentor = new Mentor({
        "name" : name,
        "email" : email,
        "course" : course
    })
    try{
        const newMentor = await addMentor.save();
        res.send(newMentor)
    }catch(err){
        res.status(500);
        res.send(err);
    }
}
export const getMentorById =async (req, res) => {
     const {id} = req.params;
    try{
        const mentor = await Mentor.findById({_id : id})
        res.status(200).send(mentor);
    }catch(err){
        res.status(500);
        res.send(err);
    }
 }