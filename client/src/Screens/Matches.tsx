import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { Match } from '../Components/Match'
export const Matches = ({
	matches,
	search,
}: {
	matches: Match[]
	search: string
}) => {
	// filter the matches what search includes

	const filteredMatches = matches.filter((t) =>
		(
			t.borrower.user.firstName.toLowerCase() +
			t.borrower.user.lastName.toLowerCase() +
			t.borrower.user.email.toLowerCase() +
			t.companyName.toLocaleLowerCase()
		).includes(search.toLowerCase())
	)

	return (
		<>
			<Row xs={1} md={2} className='g-4'>
				{filteredMatches.map((match) => (
					<Col key={match.id}>
						{/* cololr the border by sections 
								For A user credit score must to be 679 and above.
								For B user credit score must to be between 579 and 679.
								For C user credit score must to be under 579. 
								*/}

						<Card
							className=' mt-3 border-3 rounded-3'
							border={
								match.borrower.creditScore >= 679
									? 'success'
									: match.borrower.creditScore < 579
									? 'danger'
									: 'warning'
							}
						>
							<Card.Header className='text-center'>
								{match.borrower.creditScore >= 679 ? (
									<h4>Section A</h4>
								) : match.borrower.creditScore < 579 ? (
									<h4>Section C</h4>
								) : (
									<h4>Section B</h4>
								)}{' '}
							</Card.Header>
							<Card.Body className='matchData'>
								<Card.Title>{match.companyName}</Card.Title>
								<Card.Text>
									<b>Full Name:</b> {match.borrower.user.firstName}{' '}
									{match.borrower.user.lastName}
									<br />
									<b>Email:</b> {match.borrower.user.email}
									<br />
									<b>Amount Request: </b> {match.amountReq}
									<br />
									<b>Balance: </b> {match.borrower.financeData.balance}{' '}
									{match.borrower.financeData.currency}
									<br />
									<b>credit Score: </b> {match.borrower.creditScore}
								</Card.Text>
							</Card.Body>
							<Card.Footer>
								Created At {new Date(match.creationTime).toLocaleString()}
							</Card.Footer>
						</Card>
					</Col>
				))}
			</Row>
		</>
	)
}
