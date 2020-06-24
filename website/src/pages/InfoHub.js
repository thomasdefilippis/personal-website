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
import AboutMe from './AboutMe';
import ContactMe from './ContactMe';
import { Route, Switch } from 'react-router-dom';
import CodingChallenges from '../components/mainPage/CodingChallenges';


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

    change:{
        marginLeft: '10px'
    },

    projects:{
      paddingTop: '10px',
      paddingBottom: '100px',
      marginTop: '100px'
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
  
}));


const InfoHub = () =>{
    const classes = useStyles();
    return(
        <div>
            <div className={classes.navigation}>
                <Grid container direction="column">
                <Grid item >
                    <NavBar />
                </Grid >
                <Grid item >
                    <Grid container direction="row">
                        <Grid item xs={0} sm={2} md={3} lg={2} xl={2}>
                        </Grid>
                        <Grid item xs={3} sm={3} md={2} lg={1} xl={1} className={classes.projects}>
                            <SeeProjects href="#Projects"/>
                        </Grid>
                        <Grid item xs={8} sm={6} md={6} lg={8} xl={9}>
                            <motion.div
                                initial='out' 
                                animate='in' 
                                exit='out'
                                className={classes.change}
                                variants={pageVariant}
                                transition={pageTransition}
                            >
                                <Switch>
                                    <Route path="/ContactMe" component={ContactMe}/>
                                    <Route path="/AboutMe"   component={AboutMe} />
                                </Switch>

                            </motion.div>
                        </Grid>
                        <Grid item xs={1} sm={2} md={2} md={false}></Grid>
                    </Grid>
                </Grid>
                </Grid>
                
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
            <CodingChallenges />
            <Footer />
        </div>
        )
}

export default InfoHub;
