import React, {Component} from 'react'
import {Form, FormGroup, Input,Label, Button,FormText } from 'reactstrap'
export default class Signup extends Component {
	constructor(props){
		super();
		this.state={passwordValid:false,repasswordValid:false}
		this.handleSubmit=this.handleSubmit.bind(this);
		this.validateForm=this.validateForm.bind(this);
	}

	validateForm(e){
		let passwordList=document.getElementsByName('password')
		let password=passwordList[0].value;
		let repassword=passwordList[1].value
		if (password.length>=6){
			this.setState({passwordValid:true})
		}else{
			this.setState({passwordValid:false})
		};
		if (repassword.length>=6&&repassword===password){
			this.setState({repasswordValid:true})
		}else{
			this.setState({repasswordValid:false})
		}
	}

	handleSubmit(e){
		e.preventDefault();
		if (this.passwordValid&&this.repasswordValid){

		}
	}

	render(){
		return (
			<Form onSubmit={this.handleSubmit} onChange={this.validateForm}>
				<FormGroup>
					<Label >Email</Label>
					<Input 
						placeholder="type your email" 
						type="email" 
						required
					/>
				</FormGroup>

				<FormGroup>
					<Label>Password</Label>
					<Input 
						placeholder="type your password" 
						type="password"
						name="password"
						required
						onChange={this.validatePassword}
						valid={this.state.passwordValid}
					/>
					{!this.state.passwordValid?
						<FormText>
							password must have at least 6 charater
						</FormText>:""
					}
					
				</FormGroup>

				<FormGroup>
					<Input 
						placeholder="confirm your password" 
						type="password" 
						name="password"
						required
						valid={this.state.repasswordValid}
					/>
					{!this.state.repasswordValid?
						<FormText >
							password not match
						</FormText>:""
					}
				</FormGroup>

				<Button type="submit">Sign Up</Button>
			</Form>

		)
	}
}