import React from 'react'
import './App.css'
import { Matches } from './Matches'
import { createApiClient, Match } from './api'
import { Dropdown, DropdownButton, Row, Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

export type AppState = {
	matches?: Match[]
	search: string
}

const api = createApiClient()
const App = () => {
	const [search, setSearch] = React.useState<string>('')
	const [matches, setMatches] = React.useState<Match[]>([])
	const [section, setSection] = React.useState<string>('ALL')

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
	console.log(matches)
	return (
		<main>
			<h1 className='text-center font-weight-bold p-2'>Matches List</h1>
			<header>
				<input
					type='search'
					className='text-center form-control'
					placeholder='Search By Name, Email, Companies...'
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
						<DropdownButton title='labels'>
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
					<Matches matches={matches} search={search} />
				</div>
			) : (
				<h2>Loading...</h2>
			)}
		</main>
	)
}
export default App
