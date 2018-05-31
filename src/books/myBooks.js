import React from 'react';
import Book from './book.js';
import {
	Row, 
	Col,
	Container, 
	Form, 
	FormGroup,
	Label,
	Input,
	Button,
} from 'reactstrap';
import {fetchBook} from '../action/addBook.js'
import {connect} from 'react-redux';
import mybooks from '../style/mybooks.css'
const myBooks=(props)=>{
	const handleSubmit=(e)=>{
		e.preventDefault();
		let name=e.target.bookRequest.value;
		props.dispatch(fetchBook(name,props.user.name));
		e.target.bookRequest.value="";
	}
	return (
		<Container fluid onSubmit={handleSubmit}>
			<Form inline>
				<FormGroup>
					<Input 
						type="text"
						placeholder="type your book name"
						name="bookRequest"
						required
					/>
				</FormGroup>
				<Button color="primary">
					Add
				</Button>
			</Form>
			{props.user.fetching?<span>Searching your book</span>:""}
			<hr/>	
			<Row>
				{props.user.books_own.map((each,index)=>{
					return (
						<Col sm="4" xs="6" md="3" lg="2" key={index}>
							<Book 
								img={each.img}
								name={each.title}
								id={each.id}
								dispatch={props.dispatch}
							/>	
						</Col>
					)
				})}
			</Row>
		</Container>	
	)
};

const mapStateToProps=state=>{
	return {user:state.user}
};
export default connect(mapStateToProps)(myBooks)