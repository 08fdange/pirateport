import React from 'react';
import { connect } from 'react-redux';
import { userLoginFetch } from '../actions/userActions.js';

class Login extends React.Component {
    state= {
        email: "",
        password: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.userLoginFetch(this.state)
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        return(
            <div>

                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email: </label>
                    <input
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={this.state.email}
                        onChange={this.handleChange}
                     /><br/>
                    
                    <label>Password: </label>
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    /><br/>

                     <input type='submit' />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);