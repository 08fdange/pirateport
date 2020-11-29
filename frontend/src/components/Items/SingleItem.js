import React from 'react';
import DeleteItemModal from './DeleteItemModal';
import { NavLink } from 'react-router-dom';
import ImageDisplay from './ImageDisplay';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import DefaultAvatar from '../../containers/ProfileContainer/no-profile-photo.png';
import DefaultPicture from './no-pic.png';

const SingleItem = props => {
    return(
        <div>
        {!props.item ? (<div>Loading...</div>) :
            (<div className='single-item-layout'>
                <div className='item-user-info'>
                    <NavLink to={props.user.attributes.avatar.image_url || DefaultAvatar}>
                        <img 
                            className="item-user-avatar" 
                            src={props.user.attributes.avatar.image_url || DefaultAvatar} 
                            alt={props.user.attributes.name} 
                        />
                    </NavLink><br/><br/>
                    <Divider />
                    <Typography variant='button'>{props.user.attributes.name}</Typography>
                    <Divider />
                    <Typography variant='button'>{props.user.attributes.phone_number}</Typography>
                    <Divider />
                    <Typography variant='button'>{props.user.attributes.email}</Typography>
                    
                </div>
                <div className='single-item-info'>
                <Typography variant='h4'>
                        {props.item.attributes.title}
                    </Typography>
                    <Divider/>
                    <img 
                        className='item-picture'
                        src={props.item.attributes.picture.picture_url || DefaultPicture}
                        alt={props.item.attributes.title}
                        style={{maxHeight: '500px'}}
                    /><br/><br/>
                    {!!(props.user.attributes.username === localStorage.currentUser) ? (
                        <div>
                            <Divider/>
                            <Button
                                // fullWidth={true}
                            >
                                <NavLink
                                    to={`/users/${props.user.attributes.username}/items/${props.item.id}/edit`}
                                >
                                    Edit Item
                                </NavLink>
                            </Button>
                            <DeleteItemModal deleteItem={props.deleteItem} item={props.item} />
                        </div>
                    ): null}
                    <Divider/>
                    <Typography variant='h4'>Price: ${props.item.attributes.price}</Typography>
                    <Divider />
                    
                    <Typography style={{marginLeft: '15px', marginRight: '15px'}}>
                        {props.item.attributes.description}
                    </Typography>
                    <Divider/>
                    <Typography>

                    </Typography>
                </div>
            </div>)}
        </div>
    )
}

export default SingleItem;