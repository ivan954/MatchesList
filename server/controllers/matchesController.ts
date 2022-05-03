import AsyncHandler from 'express-async-handler'
import { tempData } from '../temp-data'

//@desc Fetch all users
//@route Get /api/match
const getAllMatches = AsyncHandler(async (req: any, res: any) => {
	res.send(tempData)
})

export { getAllMatches }
