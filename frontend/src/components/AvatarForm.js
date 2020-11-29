import React from 'react';
import { connect } from 'react-redux';
import { postAvatar } from '../actions/userActions.js';
import './form.css';

class AvatarForm extends React.Component {
    state = {
        avatar: ""
    }

    handleFileSelect = (event) => {
        event.preventDefault();
        this.setState({
            avatar: event.target.files[0]
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append('avatar', this.state.avatar);
        formData.append('username', localStorage.currentUser);
        console.log(formData)
        this.props.postAvatar(formData);
    }

    handleClick = (event) => {
        event.preventDefault();
        let avatarForm = document.getElementsByClassName("avatar-form")[0];
        if (avatarForm.style['opacity'] === '0') {
            avatarForm.style['opacity'] = '100%'
        }
        else {
            avatarForm.style['opacity'] = '0'
        }
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Upload Profile Picture</button>
                <div className='form-div avatar-form' style={{opacity: 0}}>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type='file'
                            id='avatar'
                            name='avatar'
                            accept='.jpg, .jpeg, .png'
                            onChange={this.handleFileSelect} 
                        /><br/>
                        <input type='submit' />
                    </form>
                    <div className='spacer'></div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    postAvatar: formData => dispatch(postAvatar(formData))
})

export default connect(null, mapDispatchToProps)(AvatarForm);