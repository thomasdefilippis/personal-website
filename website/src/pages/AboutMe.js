import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import NavBar from '../components/AboutMe/NavBar';
import SeeProjects from '../components/AboutMe/SeeProjects';
import ProjectContent from '../components/mainPage/ProjectContent';
import ScrollUp from '../components/mainPage/ScrollUp';
import Description from '../components/AboutMe/Description';
import Footer from '../components/mainPage/Footer';
import { motion } from 'framer-motion';
import { pageVariant, pageTransition } from './PageTransition';

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: 'black',
        height: 'auto'

    },
    navigation:{
        width: '100%',
        minHeight: '125vh',
        backgroundColor: 'black',
    },


    body: {
        marginTop: '400px'
    },

    projects:{
      paddingTop: '10px',
      paddingBottom: '100px'
    },
  
    imageContainer:{
      marginTop: '20px',
      margin: '10px',
      position: 'relative',
      float: 'left',
      width: '175px',
      height: '175px',
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
    
    example:{
    color: "white",
    fontSize: '40px',
    }
  
}));

const AboutMe = () =>{
    const classes = useStyles();
    return(
    <motion.div 
      initial='out' 
      animate='in' 
      exit='out'
      variants={pageVariant}
      className={classes.root}
      transition={pageTransition}
    >
      <div className={classes.navigation}>
        <Grid container direction="column">
          <Grid item >
            <NavBar />
          </Grid >
          <Grid item >
            <Grid container direction="row">
                <Grid item xs={1} sm={2} md={3} lg={2} xl={2}>
                </Grid>
                <Grid item xs={3} sm={3} md={2} lg={1} xl={1} className={classes.projects}>
                    <SeeProjects href="#Projects"/>
                </Grid>
                <Grid item xs={7} sm={6} md={6} lg={8} xl={9}>
                  <div className={classes.imageContainer}>
                    <img alt="myFace is supposed to be here" src={require('../components/AboutMe/myFace.jpg')} align='left'height="175px"  className={classes.myFace}/>
                  </div>
                  <Description className={classes.description}/>
                </Grid>
                <Grid item xs={1} sm={2} md={2} md={false}></Grid>
            </Grid>
          </Grid>
        </Grid>
        
      </div>
      <div className='Projects' id="projects">
        <ScrollUp />
        <Grid container direction='row' className={classes.projects} >
          <Grid item className={classes.example} xs={false} sm={1} md={1} lg={2} xl={2}>
          </Grid>
          <Grid item className={classes.example} xs={12} sm={10} md={10} lg={8} xl={8}>
            <ProjectContent />
          </Grid>
          <Grid item className={classes.example} xs={false} sm={1} md={1} lg={2} xl={2}>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </motion.div>
    )
}

export default AboutMe;
