import React from 'react';
import { connect } from 'react-redux';
import { userPostFetch } from '../actions/userActions.js';

class Signup extends React.Component {
    state = {
        username: "",
        password: "",
        password_confirmation: "",
        email: "",
        name: "",
        avatar: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.userPostFetch(this.state)
        this.setState({
            username: "",
            password: "",
            password_confirmation: "",
            email: "",
            name: "",
            avatar: ""
        })
    }

    render() {
        return(
            <div>
                <h1>Sign Up For An Account</h1>

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

                    <label>Confirm Password: </label>
                    <input 
                        type='password' 
                        name='password_confirmation'
                        placeholder='Password'
                        value={this.state.password_confirmation}
                        onChange={this.handleChange} 
                    /><br/>

                    <label>Username: </label>
                    <input 
                        type='text' 
                        name='username'
                        placeholder='Username'
                        value={this.state.username}
                        onChange={this.handleChange} 
                    /><br/>

                    <label>Name: </label>
                    <input 
                        type='text' 
                        name='name'
                        placeholder='Name'
                        value={this.state.name}
                        onChange={this.handleChange} 
                    /><br/>

                    <label>Avatar: </label>
                    <input 
                        type='text' 
                        name='avatar'
                        placeholder='Avatar (url)'
                        value={this.state.avatar}
                        onChange={this.handleChange} 
                    /><br/>

                    <input type='Submit' />
                    
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);