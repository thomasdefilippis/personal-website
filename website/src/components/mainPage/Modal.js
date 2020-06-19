import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
const useStyles = makeStyles((theme) => ({
  image:{
      width: '100%',
      height: '100%'
  },
  dialog:{
      textAlign: 'center'
  }
}));

export default function ModalComponent(props) {
  const classes = useStyles();


  return (
      
      <Dialog
        maxWidth='xl'
        className={classes.dialog}
        open={props.open}
        onClose={props.onClick}
        aria-labelledby="max-width-dialog-title"
      >
        <DialogTitle id="max-width-dialog-title">{props.title}</DialogTitle>
        <DialogContent className={classes.dialog}>
          <img src={props.gifUrl} className={classes.image} height="auto" width="auto"/>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClick} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}
