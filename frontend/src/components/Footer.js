import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { white } from 'material-ui/styles/colors';

function Copyright() {
  return (
    <Typography variant="body2" style={{color: 'white'}}>
      {'Copyright © '}
      <Link style={{color: 'white'}} href="https://material-ui.com/">
        PiratePort
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '94vh',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  footer: {
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const Footer = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          {/* <Typography variant="body1">My sticky footer can be found here.</Typography> */}
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

export default Footer; 