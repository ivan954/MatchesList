import express from 'express'
const router = express.Router()

import {
	getUserslabelDecline,
	getUserslabelApproved,
	getUserslabelPossible,
	getUserslabelOpen,
	getUserslabelClose,
	getMatchesLableExceptApproved,
	getMatchesLableExceptDecline,
} from '../controllers/lablesController'

router.route('/label/Decline').get(getUserslabelDecline)
router.route('/label/approved').get(getUserslabelApproved)
router.route('/label/Possible').get(getUserslabelPossible)
router.route('/label/Open').get(getUserslabelOpen)
router.route('/label/Close').get(getUserslabelClose)
router.route('/label/excepta').get(getMatchesLableExceptApproved)
router.route('/label/exceptd').get(getMatchesLableExceptDecline)

export default router
