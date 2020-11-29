import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

class EditItemConfirm extends React.Component {
    back = event => {
        event.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { title, description, city, state, location, category, price, id }} = this.props;
        const user_id = localStorage.getItem('user_id');
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <Typography variant="h4">Edit Item</Typography>
                    <Divider/>
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
                            secondaryText={ description }
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
                        onClick={this.props.handleSubmit({title, description, city, state, location, category, price, user_id, id})}
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

export default EditItemConfirm;