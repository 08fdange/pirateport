import React from 'react';
import './Errors.css';

const Error = props => {
    return(
        <div className="errors">
            <p>{props.error.user_authentication}</p>
        </div>
    )
}

export default Error;