import { Hono } from 'hono'
import { getUserProfileById,updateUserProfileById,createUserProfileById} from '../controllers/userController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'
const userRoutes = new Hono()
userRoutes.use('*', authMiddleware)
userRoutes.get('/profile/:id', getUserProfileById)
userRoutes.put('/profile/:id', updateUserProfileById)
userRoutes.post('/profile/:id', createUserProfileById)

export default userRoutes
