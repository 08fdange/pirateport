import React from 'react';

const ImageDisplay = props => {
    return(
        <div>
            <img src={props.image} alt={props.alt} />
        </div>
    )
}

export default ImageDisplay;