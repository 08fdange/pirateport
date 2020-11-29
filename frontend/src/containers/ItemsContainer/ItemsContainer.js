import React from 'react';
import Items from '../../components/Items/Items.js';
import './ItemsContainer.css';
import FilterMenu from '../../components/FilterMenu.js';

class ItemsContainer extends React.Component {
    state = {
        query: "",
        category: "",
        filtered: false,
        search: false

    }

    handleSearchChange = (event) => {
        if (event.target.value === "") {
            this.setState({
                query: "",
                search: false
            })
        }
        else {
            this.setState({
                query: event.target.value,
                search: true
            })
        }
    }

    handleSelectChange = (event) => {
        if (event.target.value === "") {
            this.setState({
                category: "",
                filtered: false
            })
        }
        else {
            this.setState({
                category: event.target.value,
                filtered: true
            })
        }
        
    }

    render() {
        let items = this.props.items.sort((a,b) => b.id - a.id)
        let filteredItems = this.props.items.filter(item => item.attributes.category === this.state.category)

        if (this.state.filtered && this.state.search) {
            items = filteredItems.filter(item => {
                const lc = item.attributes.title.toLowerCase();
                const q = this.state.query.toLowerCase();
                return lc.includes(q);
            })
        }
        else if(this.state.query) {
            items = items.filter(item => {
                const lc = item.attributes.title.toLowerCase();
                const q = this.state.query.toLowerCase();
                return lc.includes(q);
            })
        }
        else if(this.state.filtered) {
            items = filteredItems;
        }       

        return(
            <div>
                <FilterMenu 
                    category={this.state.category} 
                    query={this.state.query} 
                    handleSelectChange={this.handleSelectChange}
                    handleSearchChange={this.handleSearchChange} 
                />
                <Items items={items} routerProps={this.props.routerProps} />
                     
            </div>
        )
    }
}

export default ItemsContainer;
