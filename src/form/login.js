import React from 'react'
import {Form, FormGroup, Input,Label, Button} from 'reactstrap'
export default ()=>{
	return (
		<Form>
			<FormGroup>
				<Label>Email</Label>
				<Input placeholder="type your email" type="email"/>
			</FormGroup>
			<FormGroup>
				<Label>Password</Label>
				<Input placeholder="type your password" type="password"/>
			</FormGroup>
			<Button>Log in</Button>
		</Form>

	)
}