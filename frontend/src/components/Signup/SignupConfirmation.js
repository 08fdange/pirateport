import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Box from '@material-ui/core/Box';
import Copyright from '../Copyright.js';

class SignupConfirmation extends React.Component {
    

    back = event => {
        event.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { username, email, name, password, password_confirmation, phone_number }} = this.props;
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <Avatar className="lock-avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Sign Up
                    </Typography>
                
                    <List>
                        <ListItem
                            primaryText='Email'
                            secondaryText={ email }
                        />
                        <ListItem
                            primaryText='Username'
                            secondaryText={ username }
                        />
                        <ListItem
                            primaryText='Name'
                            secondaryText={ name }
                        />
                        <ListItem
                            primaryText='Phone Number'
                            secondaryText={ phone_number }
                        />
                    </List>
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                    />
                    <RaisedButton 
                        label="Confirm & Submit"
                        primary={true}
                        style={styles.button}
                        onClick={this.props.handleSubmit({username, email, name, password, password_confirmation, phone_number})}
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
 
export default SignupConfirmation;