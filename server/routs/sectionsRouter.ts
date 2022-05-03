import express from 'express'
const router = express.Router()

import {
	getUsersSectionA,
	getUsersSectionB,
	getUsersSectionC,
} from '../controllers/sectionsController'

router.route('/a').get(getUsersSectionA)
router.route('/b').get(getUsersSectionB)
router.route('/c').get(getUsersSectionC)

export default router
