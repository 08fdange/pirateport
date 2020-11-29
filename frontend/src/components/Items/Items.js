import React from 'react';
import Item from './Item.js';
import './Items.css';

class Items extends React.Component {
    render() {
        let itemsList = this.props.items.map(item => {
            return(
                <Item item={item} key={item.id} routerProps={this.props.routerProps} />
            )
        })
        return(
            <div className='grid-container'>
                {itemsList}
            </div>
        )
    }
}

export default Items;