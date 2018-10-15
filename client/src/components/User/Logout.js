import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { deleteSession } from '../../actions/SessionActions';

class Logout extends Component {
    handleClick = event => {
        event.preventDefault();
        this.props.deleteSession();
        this.props.history.push('/');
    }

    render() {
        return(
            <div className='logout-button'>
                <button onClick={this.handleClick}>Log Out</button>
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    deleteSession: () => dispatch(deleteSession())
})

export default withRouter(connect(null, mapDispatchToProps)(Logout));
