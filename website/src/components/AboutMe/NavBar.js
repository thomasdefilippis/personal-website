import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core';
import TitleIcon from '@material-ui/icons/Title';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    typographyStyles: {
        flex: 1,
        color: 'rgb(228, 130, 74)',
        fontSize: '40px',
        marginTop: '30px',
        marginBottom: '20px',
        marginLeft: '20px',
        marginRight: '10px'
    },

    root: {
        boxShadow: "none",
        backgroundColor: "#222222",
        height: '70px',
        height: 'auto'
    },

    titleIcon: {
        color: 'rgb(228, 130, 74)',
        marginTop: '10px',
        marginRight: '10px',
        fontSize: '50px',
        border: 'solid 2px rgb(228, 130, 74)'

    },

    link:{
        color: 'rgb(228, 130, 74)',
        marginTop: '20px',
        borderRight: '2px solid rgb(228, 130, 74)',
        width: '100px',
        height: '60px'
    },

    linkTypography:{
        fontSize: '30px',
        paddingTop: '5px'
    }
    
}));

const NavBar = () => {
    const classes = useStyles();
    return(
        <AppBar position="static" className={classes.root} id="navBar">
            <Toolbar>
                <Link to='/' className={classes.link}><Typography className={classes.linkTypography}>Home</Typography></Link>
                <Typography className={classes.typographyStyles}>
                     Thomas Defilippis
                </Typography>
                <Typography>

                </Typography>
                <TitleIcon className={classes.titleIcon}/>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;