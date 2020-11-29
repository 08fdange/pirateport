import React from 'react';
import './Errors.css';

const Errors = props => {
    return(
        <div className='errors'>
            {props.errors.map(error => {
                return(<p key={error}>{error}</p>)
            })}
        </div>
    )
}

export default Errors;