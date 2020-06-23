import React from 'react';
import { makeStyles  } from '@material-ui/core';
import Description from '../components/AboutMe/Description';

const useStyles = makeStyles((theme) => ({
    root:{
      width: 'auto'
    },
  
    imageContainer:{
      marginTop: '20px',
      margin: '10px',
      marginLeft: '0px',
      position: 'relative',
      float: 'left',
      width: '170px',
      height: '170px',
      shapeOutside: 'circle()'
    },


    myFace:{
      position: 'absolute',
      borderRadius: '50%',
      border: '4px solid rgb(228, 130, 74)',
      top: '0',
      left: '0',
      width: '95%',
      height: '95%',
      objectFit: 'cover'
    }, 
  
}));

const AboutMe = () =>{
    const classes = useStyles();
    return(
      <div className={classes.root}>
        <div className={classes.imageContainer}>
          <img alt="myFace is supposed to be here" src={require('../components/AboutMe/myFace.jpg')} align='left'height="175px"  className={classes.myFace}/>
        </div>
        <Description className={classes.description}/>
      </div>
    )
}

export default AboutMe;
