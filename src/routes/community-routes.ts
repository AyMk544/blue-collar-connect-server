import { Hono } from 'hono' 
import { authMiddleware } from '../middlewares/authMiddleware.js'
const communityRoutes = new Hono()

communityRoutes.use('*', authMiddleware)


export default communityRoutes
