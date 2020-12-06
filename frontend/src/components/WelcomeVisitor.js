import React from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    welcomeCard: {
        maxWidth: 645,
        background: 'rgba(0,0,0,1)',
        margin: '20px',
        paddingLeft: '200px',
        paddingRight: '200px'
      },
    card: {
        maxWidth: 645,
        background: 'rgba(0,0,0,0.5)',
        margin: '20px',
        paddingLeft: '200px',
        paddingRight: '200px'
    },
    media: {
        height: 440,
    },
    title: {
        fontFamily: 'Ubuntu',
        fontWeight: 'bold',
        fontSize: '2rem',
        color: '#fff',
    },
    desc: {
        fontFamily: 'Ubuntu',
        fontSize: '1.1rem',
        color: '#ddd',
    },
});

export default function WelcomeVisitor() {
    const classes = useStyles();

    return (
        <div>
            <div>
                <Card className={classes.welcomeCard}>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h1"
                            className={classes.title}
                        >
                            PiratePort    
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className={classes.desc}
                        >
                            "One Man's Trash is Another Man's Treasure"
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <NavLink to='/signup'>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h1"
                            className={classes.title}
                        >
                            Signup    
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className={classes.desc}
                        >
                            Click HERE
                        </Typography>
                    </CardContent>
                </Card>
            </NavLink>
           
            <NavLink to='/login'>
                <Card className={classes.card} >
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h1"
                            className={classes.title}
                        >
                            Login
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className={classes.desc}
                        >
                            Click HERE
                        </Typography>
                    </CardContent>   
                </Card>
            </NavLink>      
        </div>
    
  );
}