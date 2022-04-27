import AsyncHandler from 'express-async-handler'
import { tempData } from '../temp-data'

//@desc Fetch all users
//@route Get /api/match
const getUsers = AsyncHandler(async (req: any, res: any) => {
	res.json(tempData)
})
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
//@desc Fetch users in label Decline
//@route Get /api/match/label/Decline
const getUserslabelDecline = AsyncHandler(async (req: any, res: any) => {
	const data = await tempData.filter((t: { labels: String[] }) =>
		t.labels?.find((e) => e === 'Decline')
	)
	res.json(data)
})
//@desc Fetch users in label approved
//@route Get /api/match/label/approved
const getUserslabelApproved = AsyncHandler(async (req: any, res: any) => {
	const data = await tempData.filter((t: { labels: String[] }) =>
		t.labels?.find((e) => e === 'Approved')
	)
	res.json(data)
})
//@desc Fetch users in label Possible
//@route Get /api/match/label/possible
const getUserslabelPossible = AsyncHandler(async (req: any, res: any) => {
	const data = await tempData.filter((t: { labels: String[] }) =>
		t.labels?.find((e) => e === 'Possible')
	)
	res.json(data)
})
//@desc Fetch users in label Open
//@route Get /api/match/label/open
const getUserslabelOpen = AsyncHandler(async (req: any, res: any) => {
	const data = await tempData.filter((t: { labels: String[] }) =>
		t.labels?.find((e) => e === 'Open')
	)
	res.json(data)
})
//@desc Fetch users in label Close
//@route Get /api/match/label/close
const getUserslabelClose = AsyncHandler(async (req: any, res: any) => {
	const data = await tempData.filter((t: { labels: String[] }) =>
		t.labels?.find((e) => e === 'Close')
	)
	res.json(data)
})
//@desc Fetch users in label Except Decline
//@route Get /api/match/label/exceptd
const getMatchesLableExceptApproved = AsyncHandler(async (req: any, res: any) => {
	const data = await tempData.filter((t: { labels: String[] }) =>
		t.labels?.find((e) => e !== 'approved')
	)
	res.json(data)
})
//@desc Fetch users in label Except Approved
//@route Get /api/match/label/excepta
const getMatchesLableExceptDecline = AsyncHandler(async (req: any, res: any) => {
	const data = await tempData.filter((t: { labels: String[] }) =>
		t.labels?.find((e) => e !== 'Decline')
	)
	res.json(data)
})
export {
	getUsers,
	getUsersSectionA,
	getUsersSectionB,
	getUsersSectionC,
	getUserslabelDecline,
	getUserslabelApproved,
	getUserslabelPossible,
	getUserslabelOpen,
	getUserslabelClose,
	getMatchesLableExceptApproved,
	getMatchesLableExceptDecline,
}
