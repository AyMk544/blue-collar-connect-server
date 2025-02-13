import { Hono } from 'hono'
import { authMiddleware } from '../middlewares/authMiddleware.js'

const jobRoutes = new Hono()

jobRoutes.use('*', authMiddleware)

export default jobRoutes
