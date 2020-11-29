import React from 'react';
import { connect } from 'react-redux';
import { userPostFetch } from '../../actions/userActions.js';
import SignupDetails from './SignupDetails.js';
import SignupDetailsPass from './SignupDetailsPass.js';
import SignupConfirmation from './SignupConfirmation.js';

class Signup extends React.Component {
    state = {
        step: 1,
        username: "",
        password: "",
        password_confirmation: "",
        email: "",
        name: "",
        phone_number: ""
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
        });
    }

    handleSubmit = (user) => (event) => {
        event.preventDefault();
        console.log(user)
        this.props.userPostFetch(user)
        this.props.routerProps.history.push('/')
    }

    render() {
        const { step } = this.state;
        const { username, password, password_confirmation, email, name, phone_number } = this.state;
        const values = { username, password, password_confirmation, email, name, phone_number }

        switch(step) {
            case 1:
                return(
                    <SignupDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return(
                    <SignupDetailsPass 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return(
                    <SignupConfirmation
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleSubmit={this.handleSubmit}
                        values={values}
                    />
                )
            default: return(<div>Sign Up</div>)
        }
    }
}

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Signup);