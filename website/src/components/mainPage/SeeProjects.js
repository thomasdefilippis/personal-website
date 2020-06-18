import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-scroll";
import Links from './Links';

const useStyles = makeStyles((theme) => ({
    buttonContainerStyles: {
        position: 'relative',
        width: '200px',
        height: 'auto',
        left: "-30px",
        top: '90px',
        margin: '0 auto',
        textAlign: 'center',
    },

    buttonStyles:{
        fontSize: '20px',
        border: 'solid 2px black',
        borderRadius: '50%',
        backgroundColor: 'black',
        color: 'rgb(228, 130, 74)',
        textTransform: 'none',
        width: '120px',
        height: '120px',
        '&:hover': {
            border: 'solid 4px rgb(228, 130, 74)',
            background: '#000000'
        }
    },


    line:{
        height: '40px',
        borderLeft: '3px solid black',
        width: '5px',
        marginLeft: '98px',

    },
    
}));

const SeeProjects = () => {
    
    
    const classes =  useStyles();
    return(
        <div className={classes.buttonContainerStyles}>
            <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
            >
                <Button className={classes.buttonStyles} >Projects</Button>
            </Link>
            <div className={classes.line}>

            </div>
            <Links />
        </div>
    )
}


export default SeeProjects;