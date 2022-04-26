import AsyncHandler from 'express-async-handler'
import { tempData } from '../temp-data'

//@desc Fetch all users
//@route Get /api/match
const getUsers = AsyncHandler(async (req: any, res: any) => {
	const PAGE_SIZE = 3

	//default page is 1
	const page = Number(req.query.page) || 1

	//users in 1 page
	const count = await tempData.length
	const pages = Math.ceil(count / PAGE_SIZE)

	const pagination = {page, pages}

	res.json({ tempData, pagination })
})

export { getUsers }
