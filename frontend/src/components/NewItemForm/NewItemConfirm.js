import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import ListItemText from '@material-ui/core/ListItemText';
import RaisedButton from 'material-ui/RaisedButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

class NewItemConfirm extends React.Component {
    back = event => {
        event.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { title, description, city, state, location, category, price }} = this.props;
        const user_id = localStorage.getItem('user_id');
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <Typography variant="h4">Add A New Item</Typography>
                    <Divider/>
                    <div className='new-item-confirm-container' >
                        <List>
                            <ListItem
                                primaryText='Item Name'
                                secondaryText={ title }
                            />
                            <ListItem
                                primaryText='Price'
                                secondaryText={ price }
                            />
                            <ListItem
                                primaryText='Description'
                                secondaryText={
                                    <Typography style={{wordWrap: "break-word"}}>{ description }</Typography>
                                }
                            />
                            <ListItem
                                primaryText='Category'
                                secondaryText={ category }
                            />
                            <ListItem
                                primaryText='City'
                                secondaryText={ city }
                            />
                            <ListItem
                                primaryText='State'
                                secondaryText={ state }
                            />
                            <ListItem
                                primaryText='Location'
                                secondaryText={ location }
                            />
                        </List>
                    </div>
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
                        onClick={this.props.handleSubmit({title, description, city, state, location, category, price, user_id})}
                    />
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

export default NewItemConfirm;