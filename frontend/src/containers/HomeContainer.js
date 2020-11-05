import React from 'react';
import Signup from '../components/Signup';
import Login from '../components/Login';

class HomeContainer extends React.Component {
    render() {

        return(
            <div>
                {localStorage.length > 0 &&
                    <h2>LOGGED IN</h2>
                }
                {localStorage.length == 0 &&
                    <div>
                        <Signup />
                        <Login />
                    </div>
                }
            </div>
        )
    }
}

export default HomeContainer;