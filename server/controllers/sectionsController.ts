import AsyncHandler from 'express-async-handler'
import { tempData } from '../temp-data'

//@desc Fetch users in section A
//@route Get /api/match/a
const getUsersSectionA = AsyncHandler(async (req: any, res: any) => {
	const data = await tempData.filter(
		(t: { borrower: { creditScore: number } }) => t.borrower.creditScore >= 679
	)
	res.json(data)
})
//@desc Fetch users in section B
//@route Get /api/match/b
const getUsersSectionB = AsyncHandler(async (req: any, res: any) => {
	const data = await tempData.filter(
		(t: { borrower: { creditScore: number } }) =>
			t.borrower.creditScore <= 679 && t.borrower.creditScore >= 579
	)
	res.json(data)
})
//@desc Fetch users in section C
//@route Get /api/match/c
const getUsersSectionC = AsyncHandler(async (req: any, res: any) => {
	const data = await tempData.filter(
		(t: { borrower: { creditScore: number } }) => t.borrower.creditScore < 579
	)
	res.json(data)
})

export { getUsersSectionA, getUsersSectionB, getUsersSectionC }
