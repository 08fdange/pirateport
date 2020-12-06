import React from 'react';
import WelcomeVisitor from '../../components/WelcomeVisitor.js';
import './HomeContainer.css';

class HomeContainer extends React.Component {
    render() {
        return(
            <div className='home-page'>
                {!this.props.loggedIn ? 
                    (
                        <div className='logout-home' style={{textAlign: 'center', alignItems: 'center'}}>
                            <WelcomeVisitor/>
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