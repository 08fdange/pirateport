import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Box from '@material-ui/core/Box';
import Copyright from '../Copyright.js';

class SignupDetailsPass extends React.Component {
    
    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }

    back = event => {
        event.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <Avatar className="lock-avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Sign Up
                    </Typography>
                    <TextField
                        type='password'
                        hintText="Enter Your Password"
                        floatingLabelText="Password"
                        onChange={handleChange('password')}
                        defaultValue={values.password}
                    /><br/>
                    <TextField
                        type='password'
                        hintText="Confirm Your Password"
                        floatingLabelText="Password Confirmation"
                        onChange={handleChange('password_confirmation')}
                        defaultValue={values.password_confirmation}
                    /><br/>
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </React.Fragment>
            </MuiThemeProvider>
        )
        
    }
}

const styles = {
    button: {
        margin: 15
    }
}
 
export default SignupDetailsPass;