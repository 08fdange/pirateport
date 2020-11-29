import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Box from '@material-ui/core/Box';
import Copyright from '../Copyright.js';


class SignupDetails extends React.Component {
    continue = event => {
        event.preventDefault();
        this.props.nextStep();
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
                        required
                        hintText="Enter Your Email"
                        floatingLabelText="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    /><br/>
                    <TextField
                        required
                        hintText="Enter Your Username"
                        floatingLabelText="Username"
                        onChange={handleChange('username')}
                        defaultValue={values.username}
                    /><br/>
                    <TextField 
                        hintText="Enter Your Full Name"
                        floatingLabelText="Full Name"
                        onChange={handleChange('name')}
                        defaultValue={values.name}
                    /><br/>
                    <TextField 
                        hintText="Enter Your Phone Number"
                        floatingLabelText="Phone Number"
                        onChange={handleChange('phone_number')}
                        defaultValue={values.phone_number}
                    /><br/>
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
 
export default SignupDetails;