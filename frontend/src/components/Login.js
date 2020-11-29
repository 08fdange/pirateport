import React from 'react';
import { connect } from 'react-redux';
import { userLoginFetch } from '../actions/userActions.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Box from '@material-ui/core/Box';
import Copyright from './Copyright.js';
import './form.css';

class Login extends React.Component {
    state= {
        email: "",
        password: ""
    }

    handleChange = input => event => {
        this.setState({
            [input]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.userLoginFetch(this.state)
        this.setState({
            email: "",
            password: ""
        })
        this.props.routerProps.history.push('/items')
    }

    render() {
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <Avatar className="lock-avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Log In
                    </Typography>
                    <TextField 
                        hintText="Enter Your Email"
                        floatingLabelText="Email"
                        onChange={this.handleChange('email')}
                        defaultValue={this.state.email}
                        required
                    /><br/>
                    <TextField 
                        hintText="Enter Your Password"
                        floatingLabelText="Password"
                        type='password'
                        onChange={this.handleChange('password')}
                        defaultValue={this.state.password}
                        required
                    /><br/>
                    <RaisedButton
                        label="Log In"
                        primary={true}
                        onClick={this.handleSubmit}
                    />
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);