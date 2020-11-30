import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { autoLogin,logout, getUsers } from './actions/userActions';
import { fetchItems, deleteItem } from './actions/itemActions';
import AppBarComp from './components/AppBar/AppBarComp';
import Signup from './components/Signup/Signup.js';
import Login from './components/Login.js';
import ItemsContainer from './containers/ItemsContainer/ItemsContainer.js';
import SingleItem from './components/Items/SingleItem.js';
import PictureUploadForm from './components/PictureUploadForm.js';
import ProfileContainer from './containers/ProfileContainer/ProfileContainer.js';
import NewItemForm from './components/NewItemForm/NewItemForm.js';
import EditItemForm from './components/EditItemForm/EditItemForm.js';
import Errors from './components/Errors/Errors.js';
import Error from './components/Errors/Error.js';
import HomeContainer from './containers/HomeContainer';
import Footer from './components/Footer.js';
import './App.css';

class App extends React.Component {

  componentDidMount = () => {
    this.props.autoLogin();
    this.interval = setInterval(() => {
      this.props.getUsers()
      this.props.fetchItems()
    }, 5000);
  }

  render() {

    return (
      <div style={{height: '100%'}} className="App">
        
        <Router>
          <AppBarComp loggedIn={this.props.loggedIn} logout={this.props.logout} />
            <main>
              <Route exact path='/' render={() => <HomeContainer loggedIn={this.props.loggedIn} />} />
              {
                !!this.props.errors ? <Errors errors={this.props.errors} /> : null
              }
              {
                !!this.props.error ? <Error error={this.props.error} /> : null
              }
              
              { 
                !this.props.loggedIn ? (
                  <div>
                    <Route exact path='/signup' render={routerProps => <Signup routerProps={routerProps} />} />
                    <Route exact path='/login' render={routerProps => <Login routerProps={routerProps} />} />
                  </div>
                )
                : null }
                {
                  !!this.props.loggedIn ?
                (
                  <div>

                    <Route path= '/users/:username/items/new' render={routerProps => <NewItemForm userId={this.props.userId} routerProps={routerProps} />} />
                    
                    <Route exact path='/items' render={routerProps => <ItemsContainer items={this.props.items} routerProps={routerProps} />} />
                    
                    <Route exact path= '/users/:username' render={ (routerProps) => {                     


                      const usernameParam = routerProps.match.params.username
                      let userObj = this.props.users.find(user => user.attributes.username === usernameParam)

                      return(
                        <ProfileContainer
                          getUsers={this.props.getUsers} 
                          userInfo={userObj}
                          allItems={this.props.items}
                          routerProps={routerProps}
                        />
                      )

                      }
                    }
                    />

                    <Route exact path='/items/:id' render={(routerProps) => {
                      const itemParamId = routerProps.match.params.id 
                      const item = this.props.items.find(item => item.id === itemParamId)
                      const user = this.props.users.find(user => user.attributes.id === item.attributes.user_id)
                      
                      return(
                        <SingleItem item={item} user={user} deleteItem={this.props.deleteItem} routerProps={routerProps} />
                      )}}
                    />

                    <Route exact path='/users/:username/items/new_item_picture' render={(routerProps) => {
                      const usernameParam = routerProps.match.params.username
                      const userId = this.props.users.find(user => user.attributes.username === usernameParam).id

                      return(
                        <PictureUploadForm userId={userId} username={usernameParam} routerProps={routerProps} />
                      )}}
                    />

                    <Route exact path='/users/:username/items/:id/edit' render={(routerProps) => {
                      const usernameParam = routerProps.match.params.username
                      const userId = this.props.users.find(user => user.attributes.username === usernameParam).id
                      const itemParamId = routerProps.match.params.id
                      const item = this.props.items.find(item => item.id === itemParamId)

                      return(
                        <EditItemForm routerProps={routerProps} item={item} userId={userId} />
                      )

                    }}
                    />


                  </div>
                ) : (
                  <Redirect to='/' />
                ) 
              }

            </main>
            <Footer/>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.usersReducer.user,
  userId: state.usersReducer.user.id,
  users: state.usersReducer.users,
  items: state.itemsReducer.items,
  loggedIn: state.usersReducer.loggedIn,
  errors: state.usersReducer.errors,
  error: state.usersReducer.error
})


const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  autoLogin: () => dispatch(autoLogin()),
  logout: () => dispatch(logout()),
  fetchItems: () => dispatch(fetchItems()),
  deleteItem: (item) => dispatch(deleteItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
