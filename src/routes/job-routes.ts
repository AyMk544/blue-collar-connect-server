import { Hono } from 'hono'
import { authMiddleware, employerMiddleware, workerMiddleware } from '../middlewares/authMiddleware.js'
import { createJobPost, fetchJobPosts } from '../controllers/jobController.js'

const jobRoutes = new Hono()

jobRoutes.use('*', authMiddleware)
jobRoutes.post('/create', createJobPost, employerMiddleware)
jobRoutes.get('/all',fetchJobPosts,workerMiddleware)

export default jobRoutes
