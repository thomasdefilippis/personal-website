import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import SeeProjects from './components/SeeProjects';
import {Grid, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ProjectContent from './components/ProjectContent';
import { Link, animateScroll as scroll } from "react-scroll";
import ScrollUp from "./components/ScrollUp";

const useStyles = makeStyles((theme) => ({
  body: {
    marginTop: '400px'
  },

  projects:{
    paddingTop: '10px',
    paddingBottom: '200px'
  },

  example:{
    color: "white",
    fontSize: '40px',
    
  }

}))

function App() {
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

    </div>
  );
}

export default App;
