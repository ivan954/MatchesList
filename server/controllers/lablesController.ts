import AsyncHandler from 'express-async-handler'
import { tempData } from '../temp-data'

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
const getMatchesLableExceptApproved = AsyncHandler(
	async (req: any, res: any) => {
		const data = await tempData.filter((t: { labels: String[] }) =>
			t.labels?.find((e) => e !== 'approved')
		)
		res.json(data)
	}
)
//@desc Fetch users in label Except Approved
//@route Get /api/match/label/excepta
const getMatchesLableExceptDecline = AsyncHandler(
	async (req: any, res: any) => {
		const data = await tempData.filter((t: { labels: String[] }) =>
			t.labels?.find((e) => e !== 'Decline')
		)
		res.json(data)
	}
)

export {
	getUserslabelDecline,
	getUserslabelApproved,
	getUserslabelPossible,
	getUserslabelOpen,
	getUserslabelClose,
	getMatchesLableExceptApproved,
	getMatchesLableExceptDecline,
}
