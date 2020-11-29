import React from 'react';
import AvatarForm from '../../components/AvatarForm.js';
import Items from '../../components/Items/Items.js';
import DefaultPicture from './no-profile-photo.png';
import './ProfileContainer.css';

class ProfileContainer extends React.Component {
    state = {
        isLoading: false
    }

    render(){
        const userItems = this.props.allItems.filter(item => item.attributes.user_id === parseInt(this.props.userInfo.id))
        
        return(
            <div>
            { (!this.props.userInfo) ? (<div>Loading</div>)
            :
            (<div className='user-container'>
                    <div className='user-sidebar'>
                        <img src={this.props.userInfo.attributes.avatar.image_url || DefaultPicture} alt='avatar' className='avatar'/>
                        {!!(this.props.userInfo.id === localStorage.getItem('user_id')) ? <AvatarForm routerProps={this.props.routerProps}/> : null }
                            
                        <div className='user-info'>
                            <h2>{this.props.userInfo.attributes.name}</h2>
                            <h3>{this.props.userInfo.attributes.username}</h3>
                            <h3>{this.props.userInfo.attributes.email}</h3>
                        </div>
                    </div>
                    <div className='user-items'>
                        <Items routerProps={this.props.routerProps} items={userItems} />
                    </div>
            </div>)
            }
            </div>
        )
    }
}

export default ProfileContainer;