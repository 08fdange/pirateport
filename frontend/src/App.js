import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsersFetch } from './actions/userActions'
import HomeContainer from './containers/HomeContainer';
import './App.css';

class App extends React.Component {

  componentDidMount = () => {
    this.props.getUsersFetch();
  }

  render() {
    console.log(this.props.users)
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContainer}/> 
        </Switch>
      </Router>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  getUsersFetch: () => dispatch(getUsersFetch())
})

export default connect(null, mapDispatchToProps)(App);
