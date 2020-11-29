import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
// import InputLabel from '@material-ui/core/InputLabel';
// import { makeStyles } from '@material-ui/core/styles';
// import itemCategories from '../../data/itemCategories.js';


class EditItemDetails extends React.Component {
    continue = event => {
        event.preventDefault();
        this.props.nextStep();
    }


    render() {
        const { values, handleChange } = this.props;
        const itemCategories = [
            "Accessories",
            "Appliances",
            "Bikes",
            "Books",
            "Cars",
            "Clothing",
            "Computers",
            "Electronics",
            "Furniture",
            "Jewelry",
            "Miscellaneous",
            "Motorcycles",
            "Musical Instruments",
            "Sporting Goods",
            "Tickets",
            "Televisions",
            "Tools",
            "Trailers",
            "Video Games",
            "Wheels/Tires"	    
        ]

        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <Typography variant="h4">Edit Item</Typography>
                    <Divider/>
                    <FormControl>
                    <TextField
                        required
                        hintText="Enter Item Name"
                        floatingLabelText="Item Name"
                        onChange={handleChange('title')}
                        defaultValue={values.title}
                    />
                    <TextField
                        required
                        hintText="Enter Your Price"
                        floatingLabelText="Price"
                        onChange={handleChange('price')}
                        defaultValue={values.price}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                    />
                    <TextField
                        hintText="Enter Your Description"
                        floatingLabelText="Description"
                        multiline
                        onChange={handleChange('description')}
                        defaultValue={values.description}
                    />
                    <TextField
                        required
                        hintText="Enter Your State"
                        floatingLabelText="State"
                        onChange={handleChange('state')}
                        defaultValue={values.state}
                    />
                    <TextField
                        required
                        hintText="Enter Your City"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <TextField
                        hintText="Enter Your Location"
                        floatingLabelText="Location"
                        onChange={handleChange('location')}
                        defaultValue={values.location}
                    /><br/>
                    <Select
                        // labelId="demo-simple-select-helper-label"
                        // id="demo-simple-select-helper"
                        variant='standard'
                        value={values.category}
                        onChange={handleChange('category')}
                    >
                        <MenuItem value=""><em>Pick a Category</em></MenuItem>
                        {itemCategories.map(cat => {
                            return(<MenuItem value={cat}>{cat}</MenuItem>)
                        })}
                    </Select><br/>
                    
                    <RaisedButton 
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    </FormControl>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 10
    }
}

export default EditItemDetails;