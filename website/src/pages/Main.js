import React from 'react';
import '../App.css';
import NavBar from '../components/mainPage/NavBar';
import SeeProjects from '../components/mainPage/SeeProjects';
import {Grid} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ProjectContent from '../components/mainPage/ProjectContent';
import ScrollUp from "../components/mainPage/ScrollUp";
import Footer from '../components/mainPage/Footer';



const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: '400px'
  },

  projects:{
    paddingTop: '0px',
    paddingBottom: '100px'
  },

  example:{
    color: "white",
    fontSize: '40px',
    
  }

}))

function Main() {
  const classes = useStyles();
  return (
    <div>
      <div className="App">
        <Grid container direction="column">
          <Grid item >
            <NavBar />
          </Grid >
        </Grid>
        <SeeProjects href="#Projects"/>
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

    </div>
  );
}

export default Main;
