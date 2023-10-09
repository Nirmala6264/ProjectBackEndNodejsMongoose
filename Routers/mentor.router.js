import express from 'express'
import { getAllMentors,createMentor,getMentorById } from '../Controllers/mentor.controller.js'

const mentorRouter = express.Router()

mentorRouter.get('/getmentor', getAllMentors)
mentorRouter.post('/creatementor', createMentor)
mentorRouter.get('/get-mentor/:id',getMentorById)


export default mentorRouter;
