import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import './AppBar.css';

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontFamily: 'Pirata One'
    },
}));

const AppBarComp = props => {

    //Material-UI Styling
    const classes = useStyles();
    
    //State
    const [state, setState] = React.useState({
      drawerOpen: false
    });

    //logout/close drawer combo function
    const logoutAndCloseDrawer = () => {
      toggleDrawer(false)
      props.logout()
    }

    //toggleDrawer function
    const toggleDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setState({ ...state, drawerOpen: open });
    };

    //AppBar Buttons
    const loginButtons = (
      <div>
        <NavLink style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }} to='/items'>Items</NavLink>
        <NavLink style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }} to={`/users/${localStorage.currentUser}/items/new`}>New Item</NavLink>
        <NavLink style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }} to={`/users/${localStorage.currentUser}`}>Profile</NavLink>
        <Button onClick={props.logout} color="inherit">Logout</Button>
      </div>
    )

    const logoutButtons = (
      <div>
        <NavLink style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }} to='/signup'>Signup</NavLink>
        <NavLink style={{ marginRight: '10px', color: 'white', textDecoration: 'none' }} to='/login'>Login</NavLink>
      </div>
    )
    
    //Hamburger Button Link Lists
    const loginList = (
      <div>
        <List>
          <ListItem>
            <NavLink to='/items'>
              <ListItemText onClick={toggleDrawer(false)} primary="Items" />
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to={`/users/${localStorage.currentUser}/items/new`}>
              <ListItemText onClick={toggleDrawer(false)} primary="New Item" />
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to={`/users/${localStorage.currentUser}`}>
              <ListItemText onClick={toggleDrawer(false)} primary="Profile" />
            </NavLink>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <Button onClick={logoutAndCloseDrawer}>LOGOUT</Button>
          </ListItem>
        </List>
      </div>
    )

    const logoutList = (
    <div>
      <List>
      <ListItem>
        <NavLink to='/signup'>
          <ListItemText onClick={toggleDrawer(false)} primary="Signup" />
        </NavLink>
      </ListItem>
    </List>
    <Divider />
    <List>
      <ListItem>
      <NavLink to='/login'>
        <ListItemText onClick={toggleDrawer(false)} primary="Login" />
      </NavLink>
      </ListItem>
    </List>
  </div>
    )

    return (
      <div className={classes.root}>
        <AppBar id='appbar' position="position">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Typography align='left' variant="h6" className={classes.title}>
              <NavLink to='/' style={{color: 'white'}}>PiratePort</NavLink>
            </Typography>
            {!props.loggedIn ? logoutButtons : loginButtons}
          </Toolbar>
        </AppBar>
        <Drawer
          anchor='top'
          open={state.drawerOpen}
          onClose={toggleDrawer(false)}
        >
          {!props.loggedIn ? logoutList : loginList}
        </Drawer>
      </div>
    );
}

export default AppBarComp;