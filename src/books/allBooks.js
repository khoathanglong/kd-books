import React from 'react'
import Book from './book.js'
import {Col, Container,Row} from 'reactstrap'
import {connect} from 'react-redux'
const allBooks= (props)=>{
	return (
		<Container fluid>
			<Row>
			{props.booklist.map((each,index)=>{
				return (
					<Col sm="4" xs="6" md="3" lg="2" key={index}>
						<Book 
							img={each.img}
							name={each.title}
							owner={each.owner}
						/>	
					</Col>
				)
			})}
			</Row>
		</Container>
	)
};

const mapStateToProps=state=>({
	booklist:state.books.booklist
});

export default connect(mapStateToProps)(allBooks)