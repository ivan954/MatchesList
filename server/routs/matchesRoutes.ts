import express from 'express'
const router = express.Router()

import { getAllMatches } from '../controllers/matchesController'

router.route('/').get(getAllMatches)

export default router
