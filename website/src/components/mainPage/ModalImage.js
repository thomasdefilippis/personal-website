import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
  image:{
      width: '100%',
      height: '100%'
  },
  dialog:{
      textAlign: 'center'
  }
}));

export default function ModalImageComponent(props) {
  const classes = useStyles();


  return (
      
      <Dialog
        maxWidth='sm'
        maxHeight='sm'
        className={classes.dialog}
        open={props.over}
        onClose={props.onClick}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{props.title}</DialogTitle>
        <DialogContent className={classes.dialog}>
          <img alt="gif that is supposed to load" src={props.image} className={classes.image} height="auto" width="auto"/>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClick} r="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}
