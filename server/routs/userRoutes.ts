import express from 'express'
const router = express.Router()

import { getUsers} from '../controllers/userController'

router.route('/').get(getUsers)

export default router