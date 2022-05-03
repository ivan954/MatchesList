import axios from 'axios'
import { Match } from './Match'

export type ApiClient = {
	getMatches: () => Promise<Match[]>
	getMatchesSectionA: () => Promise<Match[]>
	getMatchesSectionB: () => Promise<Match[]>
	getMatchesSectionC: () => Promise<Match[]>
	getMatchesLableDecline: () => Promise<Match[]>
	getMatchesLableApproved: () => Promise<Match[]>
	getMatchesLablePossible: () => Promise<Match[]>
	getMatchesLableOpen: () => Promise<Match[]>
	getMatchesLableClose: () => Promise<Match[]>
	getMatchesLableExceptApproved: () => Promise<Match[]>
	getMatchesLableExceptDecline: () => Promise<Match[]>
}

export const createApiClient = (): ApiClient => {
	return {
		getMatches: () => {
			const data = axios
				.get(`http://localhost:8888/api/match`)
				.then((res) => res.data)

			return data
		},
		getMatchesSectionA: () => {
			const data = axios
				.get(`http://localhost:8888/api/match/a`)
				.then((res) => res.data)

			return data
		},
		getMatchesSectionB: () => {
			const data = axios
				.get(`http://localhost:8888/api/match/b`)
				.then((res) => res.data)

			return data
		},
		getMatchesSectionC: () => {
			const data = axios
				.get(`http://localhost:8888/api/match/c`)
				.then((res) => res.data)

			return data
		},
		getMatchesLableDecline: () => {
			const data = axios
				.get(`http://localhost:8888/api/match/label/Decline`)
				.then((res) => res.data)

			return data
		},
		getMatchesLableApproved: () => {
			const data = axios
				.get(`http://localhost:8888/api/match/label/Approved`)
				.then((res) => res.data)

			return data
		},
		getMatchesLablePossible: () => {
			const data = axios
				.get(`http://localhost:8888/api/match/label/Possible`)
				.then((res) => res.data)

			return data
		},
		getMatchesLableOpen: () => {
			const data = axios
				.get(`http://localhost:8888/api/match/label/Open`)
				.then((res) => res.data)

			return data
		},
		getMatchesLableClose: () => {
			const data = axios
				.get(`http://localhost:8888/api/match/label/Close`)
				.then((res) => res.data)

			return data
		},
		getMatchesLableExceptApproved: () => {
			const data = axios
				.get(`http://localhost:8888/api/match/label/excepta`)
				.then((res) => res.data)

			return data
		},
		getMatchesLableExceptDecline: () => {
			const data = axios
				.get(`http://localhost:8888/api/match/label/exceptd`)
				.then((res) => res.data)

			return data
		},
	}
}
