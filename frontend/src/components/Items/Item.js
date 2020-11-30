import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DefaultPicture from './no-pic.png';
import moment from 'moment';

const Item = props => {
    const classes = useStyles();
    const clickHandler = () => {
        props.routerProps.history.push(`/items/${props.item.id}`)
    }

    return(
        <Card onClick={clickHandler} className={classes.root}>
            <CardActionArea>
            <CardMedia
                className={classes.media}
                image={props.item.attributes.picture.picture_url || DefaultPicture}
                title={props.item.attributes.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {props.item.attributes.title}
                </Typography>
                <Typography variant="h4" color="textSecondary" component="p">
                ${props.item.attributes.price}
                </Typography>
            </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    className='item-date-updated'
                    size="small" 
                    color="primary" 
                    onClick={clickHandler}>
                    Last Updated: {moment(props.item.attributes.updated_at).format("MMM Do YYYY")}  
                </Button>
            </CardActions>
        </Card>
    )
}

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
  });

export default Item;