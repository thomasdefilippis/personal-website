import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
    buttonContainerStyles: {
        width: '150px',
        height: '300px',
        margin: '0 auto',
        textAlign: 'center',
    },

    buttonStyles:{
        fontSize: '25px',
        width: '125px',
        borderRadius: '15%',
        backgroundColor: 'rgb(228, 130, 74)',
        color: 'black',
        textTransform: 'none',
        marginBottom: '0px',
        fontWeight: 'bold',
        '&:hover': {
            border: 'solid 4px #396395',
            backgroundColor: 'rgb(228, 130, 74)'
        }
    },
    arrowStyles:{
        position: 'relative',
        fontSize: '100px',
        color: "rgb(228, 130, 74)"
    }
    
}));

const ScrollUp = () => {
    
    
    const classes =  useStyles();
    return(
        <div className={classes.buttonContainerStyles}>
            <ArrowUpwardIcon className={classes.arrowStyles} />
            <br></br>
            <Link
                        activeClass="active"
                        to="navBar"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
            >
                <Button className={classes.buttonStyles} >Back<br></br>to Top</Button>
            </Link>
        </div>
    )
}

export default ScrollUp;