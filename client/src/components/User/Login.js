import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createSession } from '../../actions/SessionActions';

class Login extends Component {

    state = {
        email: '',
        password: '',
        loggedIn: false,
        error: false
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.createSession(this.state.email, this.state.password)
        .then(this.checkForErrors.bind(this));
      }

      checkForErrors = () => {
        this.setState({
       text: '',
       error: false
   });
   if (this.props.errors.length > 0) {
       this.setState({
           error: true
       })
   } else {
       this.props.history.push('/')
   }
}


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

const mapStateToProps = (state) => ({
    error: state.sessions.error,
    currentUser: state.sessions.currentUser
})

const mapDispatchToProps = dispatch => ({
    createSession: (email, password) => dispatch(createSession(email, password))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
