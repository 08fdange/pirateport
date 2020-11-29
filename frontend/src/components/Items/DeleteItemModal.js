import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(2, 4, 3),
  },
}));

const DeleteItemModal = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteButton = () => {
      props.deleteItem(props.item)
      handleClose()
  }

  return (
    <div>
        <Button
            color='primary'
            onClick={handleOpen}
        >
            Delete Item
        </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <p id="transition-modal-description">Are you sure you want delete this item?</p>
            <Button color='primary' onClick={handleDeleteButton}>Yes</Button>
            <Button color='secondary' onClick={handleClose}>No</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default DeleteItemModal;