import React from 'react';
import EditItemDetails from './EditItemDetails.js';
import EditItemConfirm from './EditItemConfirm.js';
import { connect } from 'react-redux';
import { editItem } from '../../actions/itemActions.js';


class EditItemForm extends React.Component {
    state = {
        step: 1,
        id: this.props.item.id,
        title: this.props.item.attributes.title,
        description: this.props.item.attributes.description,
        city: this.props.item.attributes.city,
        state: this.props.item.attributes.state,
        location: this.props.item.attributes.location,
        category: this.props.item.attributes.category,
        price: this.props.item.attributes.price,
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
        this.props.editItem(item)
        this.props.routerProps.history.push(`/items/${this.props.item.id}`)
    }

    render() {
        const { step } = this.state;
        const { title, description, city, state, location, category, price, id } = this.state;
        const values = { title, description, city, state, location, category, price, id }

        switch(step) {
            case 1:
                return(
                    <EditItemDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return(
                    <EditItemConfirm
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
    editItem: formData => dispatch(editItem(formData))
})

export default connect(null, mapDispatchToProps)(EditItemForm)