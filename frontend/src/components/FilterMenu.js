import React from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const FilterMenu = props => {
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
        <div className='filter-menu'>
            <div></div>
            <div>
                <Typography color='primary'>
                        Search by Title
                </Typography>
                <TextField
                    placeholder="Search"
                    onChange={props.handleSearchChange}
                    value={props.query}
                    variant='standard'
                />
                <br/>
                <Divider/>
            </div>
            <div>
                <Typography color='secondary'>
                    Filter by Category
                </Typography>
                <Select 
                    variant='standard'
                    onChange={props.handleSelectChange}
                    value={props.category}
                >
                    <MenuItem value=""><em>Pick a Category</em></MenuItem>
                        {itemCategories.map(cat => {
                            return(<MenuItem value={cat}>{cat}</MenuItem>)
                        })}
                </Select>
                {/* <Button>Filter</Button> */}
                <Divider/>
            </div>
            <Divider/>
        </div>
    )
}

export default FilterMenu;