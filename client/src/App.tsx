import React, { useState } from 'react'
import './App.css'
import { Matches } from './Matches'
import { createApiClient, Match } from './api'
import { Pagination } from './Pagination'
import {
	Dropdown,
	DropdownButton,
	Row,
	Col,
	Container,
	Button,
} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export type AppState = {
	matches?: Match[]
	search: string
}

const api = createApiClient()
const App = () => {
	// count and show without approve & approve
	const [btntoggle, setBtntoggle] = React.useState<boolean>(false)
	const [btntoggleA, setBtntoggleA] = React.useState<boolean>(false)
	const [approveCount, setApproveCount] = React.useState<Number>()
	const [DeclineCount, setDeclineCount] = React.useState<Number>()

	//set start page and amount will be showing in screen
	const [currentPage, setCurrentPage] = useState(1)
	const [postsPrePage] = useState(4)

	// search state
	const [search, setSearch] = React.useState<string>('')

	// showing data state
	const [matches, setMatches] = React.useState<Match[]>([])

	// filter by default showing all the data
	const [section, setSection] = React.useState<string>('ALL')

	// switch case for using the filter to change the showing data = matches
	async function fetchMatches() {
		switch (section) {
			case 'ALL':
				setMatches(await api.getMatches())
				break

			case 'A':
				setMatches(
					await (
						await api.getMatches()
					).filter((t) => t.borrower.creditScore >= 679)
				)
				break

			case 'B':
				setMatches(
					await (
						await api.getMatches()
					).filter(
						(t) =>
							t.borrower.creditScore <= 679 && t.borrower.creditScore >= 579
					)
				)
				break

			case 'C':
				setMatches(
					await (
						await api.getMatches()
					).filter((t) => t.borrower.creditScore < 579)
				)
				break

			case 'Decline':
				setMatches(
					await (
						await api.getMatches()
					).filter((t) => t.labels?.find((e) => e === 'Decline'))
				)
				break

			case 'approved':
				setMatches(
					await (
						await api.getMatches()
					).filter((t) => t.labels?.find((e) => e === 'approved'))
				)
				break

			case 'Possible':
				setMatches(
					await (
						await api.getMatches()
					).filter((t) => t.labels?.find((e) => e === 'Possible'))
				)
				break

			case 'Open':
				setMatches(
					await (
						await api.getMatches()
					).filter((t) => t.labels?.find((e) => e === 'Open'))
				)
				break

			case 'Close':
				setMatches(
					await (
						await api.getMatches()
					).filter((t) => t.labels?.find((e) => e === 'Close'))
				)
				break

			case 'Everything except approved':
				setMatches(
					await (
						await api.getMatches()
					).filter((t) => t.labels?.find((e) => e !== 'approved'))
				)
				break

			case 'Everything except Decline':
				setMatches(
					await (
						await api.getMatches()
					).filter((t) => t.labels?.find((e) => e !== 'Decline'))
				)
				break

			default:
				const obj = await api.getMatches()
				setMatches(obj)
				break
		}
	}

	React.useEffect(() => {
		fetchMatches()
	}, [section])

	let searchDebounce: any

	const onSearch = (val: string, newPage?: number) => {
		clearTimeout(searchDebounce)
		searchDebounce = setTimeout(async () => {
			setSearch(val)
		}, 300)
	}

	// show Everything except approved or Decline and count them
	const toggleApprove = () => {
		setSection('Everything except approved')
		const count = matches.filter((t) => t.labels?.find((e) => e === 'approved'))
		setApproveCount(count.length)
		setBtntoggleA(true)
	}
	const toggleDecline = () => {
		setSection('Everything except Decline')
		const count = matches.filter((t) => t.labels?.find((e) => e === 'Decline'))
		setDeclineCount(count.length)
		setBtntoggle(true)
	}

	//get current post
	const indexOfLastPost = (currentPage * postsPrePage)
	const indexOfFirstPost = (indexOfLastPost - postsPrePage)
	const currentPost = matches.slice(indexOfFirstPost, indexOfLastPost)

	//change page
	const paginate = (pageNumber: React.SetStateAction<number>) => {
		setCurrentPage(pageNumber)
	}

	return (
		<main>
			<h1 className='text-center font-weight-bold p-2'>Matches List</h1>
			<header>
				{/*can be searched only by section state (ALL,A,B,C, Decline, approved, Possible, Open, Close, Everything except approved, Everything except Decline) */}
				<input
					type='search'
					className='text-center form-control'
					placeholder={`Search by   ${section}    Name, Email, Companie...`}
					onChange={(e) => onSearch(e.target.value)}
				/>
			</header>
			<Container>
				<Row className='p-3 text-center'>
					<Col>
						<DropdownButton title='scoring'>
							<Dropdown.Item
								onClick={() => {
									setSection('ALL')
								}}
							>
								all Sections
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() => {
									setSection('A')
								}}
							>
								Section A
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() => {
									setSection('B')
								}}
							>
								Section B
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() => {
									setSection('C')
								}}
							>
								Section C
							</Dropdown.Item>
						</DropdownButton>
					</Col>
					<Col>
						<Button className='m-2' onClick={toggleApprove}>
							Approve
						</Button>

						<Button className='m-2' onClick={toggleDecline}>
							Decline
						</Button>

						{/* show after clicking the Approved/Decline button */}

						{btntoggleA && <h5>Count of Approved : {approveCount}</h5>}
						{btntoggle && <h5>Count of Decline : {DeclineCount}</h5>}
					</Col>
					<Col>
						<DropdownButton title='labels'>
							<Dropdown.Item
								onClick={() => {
									setSection('approved')
								}}
							>
								Approved
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() => {
									setSection('Decline')
								}}
							>
								Decline
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() => {
									setSection('Possible')
								}}
							>
								Possible
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() => {
									setSection('Open')
								}}
							>
								Open
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() => {
									setSection('Close')
								}}
							>
								Close
							</Dropdown.Item>
						</DropdownButton>
					</Col>
				</Row>
			</Container>

			{matches ? (
				<div className='results'>Showing {matches.length} results</div>
			) : null}
			{matches ? (
				<div className='p-3 mb-2 bg-white border'>
					<Matches matches={currentPost} search={search} />
				</div>
			) : (
				<h2>Loading...</h2>
			)}
			<div className="d-flex justify-content-center">
				<Pagination
				postsPrePage={postsPrePage}
				totalPost={matches.length}
				paginate={paginate}
			/>
			</div>
			
		</main>
	)
}
export default App
