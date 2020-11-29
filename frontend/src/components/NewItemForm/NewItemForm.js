import React from 'react';
import NewItemDetails from './NewItemDetails.js';
import NewItemConfirm from './NewItemConfirm.js';
import { connect } from 'react-redux';
import { postItem } from '../../actions/itemActions.js';


class NewItemForm extends React.Component {
    state = {
        step: 1,
        title: "",
        description: "",
        city: "",
        state: "",
        location: "",
        category: "",
        price: 0,
        user_id: localStorage.getItem('user_id')
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })     
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => event => {
        this.setState({
            [input]: event.target.value
        })
    }

    handleSubmit = item => event => {
        event.preventDefault();
        this.props.postItem(item)
        this.props.routerProps.history.push(`/users/${localStorage.getItem('currentUser')}/items/new_item_picture`)
    }

    render() {
        const { step } = this.state;
        const { title, description, city, state, location, category, price } = this.state;
        const values = { title, description, city, state, location, category, price }

        switch(step) {
            case 1:
                return(
                    <NewItemDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return(
                    <NewItemConfirm
                        prevStep={this.prevStep}
                        values={values}
                        handleSubmit={this.handleSubmit}
                    />
                )
            default: return(<div>New Item</div>)
        }
    }
}


const mapDispatchToProps = dispatch => ({
    postItem: formData => dispatch(postItem(formData))
})

export default connect(null, mapDispatchToProps)(NewItemForm)