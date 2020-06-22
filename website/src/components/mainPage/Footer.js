import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Grid} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import GitHubIcon from '@material-ui/icons/GitHub';
import TitleIcon from '@material-ui/icons/Title';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';


const useStyles = makeStyles((theme) => ({
    LinkStyles: {
        color: 'rgb(228, 130, 74)',
        marginTop: '30px',
        marginLeft: '0px',
        marginRight: '20px',
    },

    linkGrid: {
        marginTop: '25px',
        textAlign: 'left'
    },

    IconStyles:{
        fontSize: '60px',
        cursor: 'pointer',
        '&:hover':{
            opacity: '0.7'
        }
    },

    root: {
        boxShadow: "none",
        backgroundColor: "#000000",
        height: '70px',
        borderTop: '2px solid rgb(228, 130, 74)',
        width: '90%',
        marginBottom: '40px',
        margin: '0 auto'
    },

    titleIcon: {
        color: 'rgb(228, 130, 74)',
        marginRight: '10px',
        marginTop: '30px',
        fontSize: '50px',
        border: 'solid 2px rgb(228, 130, 74)'

    },

    titleIconGrid:{
        textAlign: 'right'
    }
    
}))

const Footer = () => {
    const classes = useStyles();
    return(
        <AppBar position="static" className={classes.root} id="navBar">
            <Toolbar>
                <Grid container direction="row">
                    <Grid item className={classes.linkGrid} xs={11}>
                        <a className={classes.LinkStyles} rel="noopener noreferrer" target="_blank" href="https://github.com/thomasdefilippis">
                            <GitHubIcon className={classes.IconStyles} />
                        </a>
                        <a className={classes.LinkStyles} rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/thomas-defilippis-55b6671a2/">
                            <LinkedInIcon className={classes.IconStyles} />
                        </a>
                        <a className={classes.LinkStyles} rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/thomas.defilippis.50">
                            <FacebookIcon className={classes.IconStyles} />
                        </a>
                    </Grid>
                    <Grid item xs={1} className={classes.titleIconGrid}>
                        <TitleIcon className={classes.titleIcon}/>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Footer;