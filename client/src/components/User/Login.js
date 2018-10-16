import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createSession } from '../../actions/SessionActions';
//import { currentUser } from '../../App'

class Login extends Component {

    state = {
				user_name: '',
        email: '',
        password: '',
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.createSession(this.state.user_name, this.state.email, this.state.password)
        //.then(this.checkForErrors.bind(this));
    }

    //checkForErrors = () => {
    //    this.setState({
    //        text: '',
    //        error: false
    //    });
    //    if (this.props.errors.length > 0) {
    //        this.setState({
    //            error: true
    //        })
    //    } else {
    //        this.props.history.push('/')
    //    }
    //}

    render() {
        const isLoggedIn = this.props.currentUser;
        return (
            <React.Fragment>
                {isLoggedIn ?
                <div className='message'>
                    <h1>You are currently logged in as {this.props.currentUser.user_name}</h1>

                </div> :
                    <div className='login-form'>
                        <h1>Login to Your Account</h1>
                        <form onSubmit={this.handleSubmit}>
														Username:
														<br></br>
														<input type="text" name="user_name" value={this.state.user_name} onChange={this.handleChange}/><br></br>
														<br></br>
                            Email
                            <br></br>
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/><br></br>
                            <br></br>
                            Password
                            <br></br>
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/><br></br>
                            <br></br>
                            <input type="submit" />
                        </form>
                    </div>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    //errors: state.sessions.errors,
    //currentUser: state.sessions.currentUser
})

const mapDispatchToProps = dispatch => ({
    createSession: (user_name, email, password) => dispatch(createSession(user_name, email, password))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
