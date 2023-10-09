import express from 'express'
import { getAllStudents,createStudents,getNoMentorsStudent, assignMentorById,assignMentorStudents,getAllStudentsByMentorId} from "../Controllers/student.controller.js";

const studentRouter = express.Router()

studentRouter.get('/getstudents', getAllStudents)
studentRouter.post('/createstudent', createStudents)
studentRouter.get('/no-mentors', getNoMentorsStudent)
studentRouter.patch('/assign-mentor/:id', assignMentorById)
studentRouter.patch('/assign-mentor-students', assignMentorStudents)
studentRouter.get('/mentor-students/:id',getAllStudentsByMentorId)

export default studentRouter;