import React from 'react';
import { makeStyles, Grid} from '@material-ui/core';
import NavBar from '../components/AboutMe/NavBar';
import SeeProjects from '../components/ContactMe/SeeProjects';
import ProjectContent from '../components/mainPage/ProjectContent';
import ScrollUp from '../components/mainPage/ScrollUp';
import Form from '../components/ContactMe/Form.js';
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
        backgroundColor: 'black'
    },

    projects:{
      paddingTop: '10px',
      paddingBottom: '100px'
    },
  


    body: {
        marginTop: '400px'
    },
    
    example:{
    color: "white",
    fontSize: '40px',
    
    },

  
}));

const ContactMe = () =>{
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
                <Grid item xs={3} sm={3} md={2} lg={1} xl={1} >
                    <SeeProjects href="#Projects"/>
                </Grid>
                <Grid item xs={7} sm={6} md={6} lg={8} xl={9}>
                    <Form />
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

export default ContactMe;
