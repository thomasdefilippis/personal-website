import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TitleIcon from '@material-ui/icons/Title';


const useStyles = makeStyles((theme) => ({
    typographyStyles: {
        flex: 1,
        color: 'rgb(228, 130, 74)',
        fontSize: '40px',
        marginTop: '10px',
        marginLeft: '0px',
        marginRight: '10px'
    },

    root: {
        boxShadow: "none",
        backgroundColor: "#000000",
        height: '70px',
    },

    titleIcon: {
        color: 'rgb(228, 130, 74)',
        marginTop: '40px',
        marginRight: '10px',
        fontSize: '50px',
        border: 'solid 2px rgb(228, 130, 74)'

    },

    

    
}))

const NavBar = () => {
    const classes = useStyles();
    return(
        <AppBar position="static" className={classes.root} id="navBar">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    Thomas Defilippis
                </Typography>
                <TitleIcon className={classes.titleIcon}/>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;