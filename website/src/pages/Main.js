import React from 'react';
import '../App.css';
import NavBar from '../components/mainPage/NavBar';
import SeeProjects from '../components/mainPage/SeeProjects';
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ProjectContent from '../components/mainPage/ProjectContent';
import ScrollUp from "../components/mainPage/ScrollUp";
import Footer from '../components/mainPage/Footer';
import {motion} from 'framer-motion';
import { pageVariant, pageTransition } from './PageTransition';
import CodingChallenges from '../components/mainPage/CodingChallenges';



const useStyles = makeStyles((theme) => ({
  body: {
    marginBottom: '400px'
  },

  projects:{
    paddingTop: '0px',
    paddingBottom: '100px',
    marginTop: '25px'
  },

  example:{
    color: "white",
    fontSize: '40px',
    
  },

  header:{
    color: 'rgb(228, 130, 74)',
    fontFamily: 'roboto',
    fontSize: '40px',
    textAlign: 'center'
  },


  title:{
      width: '100%',
      height: 'auto',
      borderBottom: 'solid 3px rgb(228, 130, 74)',
      borderTop: 'solid 3px rgb(228, 130, 74)',
      marginTop: '70px'
  },

  App:{
    height: 'auto'
  }

}))

function Main() {
  const classes = useStyles();
  return (
    <motion.div
      initial='out' 
      animate='in' 
      exit='out'
      variants={pageVariant}
      transition={pageTransition}
    >
      <div className="App">
        <Grid container direction="column" >
          <Grid item >
            <NavBar />
          </Grid >
        </Grid>
        <SeeProjects href="#Projects"/>
      </div>
      <div className='Projects' id="projects">
        <ScrollUp />
        <header className={classes.title} >
            <h1 className={classes.header}>Projects</h1>
        </header>
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
      <CodingChallenges/>
      <Footer />

    </motion.div>
  );
}

export default Main;
