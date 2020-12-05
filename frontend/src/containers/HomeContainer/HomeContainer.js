import React from 'react';
import './HomeContainer.css';

class HomeContainer extends React.Component {
    render() {
        return(
            <div className='home-page'>
                {!this.props.loggedIn ? 
                    (
                        <div className='logout-home'>
                            <div className='login-div'>
                                <p>Login</p>
                            </div>
                            <div className='signup-div'>
                                <p>Signup</p>
                            </div>
                        </div>
                    ) 
                    : 
                    (
                        <div className='login-home'>

                        </div>
                    )
                }
            </div>
        )     
    }
}

export default HomeContainer;