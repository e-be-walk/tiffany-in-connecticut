import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from './Session'

class LoginForm extends Component {
	state = {
		email: '',
		password: ''
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.history.push("/")
		this.props.login(this.state)
	}

	handleChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	render(){
		return(
			<div className="signup-form-container">
			<h2>Login</h2>
			<hr></hr>
			<form onSubmit={this.handleSubmit}>
      	Username: <input onChange={this.handleChange} type="text" name="username"/><br></br>
				Email: <input onChange={this.handleChange} type="text" name="email"/><br></br>
				Password: <input onChange={this.handleChange} type="password" name="password"/><br></br>
				<input type="submit" value="Log In" />
			</form>
			</div>
		)
	}
}

export default connect(null, { login })(LoginForm)
