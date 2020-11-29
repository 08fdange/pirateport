import React from 'react';
import { connect } from 'react-redux';
import { postPicture } from '../actions/itemActions.js';

class PictureUploadForm extends React.Component {
    state={
        picture: ""
    }

    handleFileSelect = (event) => {
        event.preventDefault();
        this.setState({
            picture: event.target.files[0]
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append('picture', this.state.picture);
        console.log(formData)
        this.props.postPicture(formData);
        this.props.routerProps.history.push(`/users/${this.props.username}`)
    }
    
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Upload Picture: </label><br/>
                    <input 
                        type='file'
                        id='picture'
                        name='picture'
                        accept='.jpg, .jpeg, .png'
                        onChange={this.handleFileSelect} 
                    /><br/>
                    <input type='submit' />
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    postPicture: (formData, item) => dispatch(postPicture(formData))
})

export default connect(null, mapDispatchToProps)(PictureUploadForm);