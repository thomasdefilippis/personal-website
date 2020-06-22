import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from "react-scroll";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
    buttonContainerStyles: {

        width: '150px',
        height: '300px',
        margin: '0 auto',
        textAlign: 'center',
        marginBottom: '250px'
    },

    buttonStyles:{
        fontSize: '20px',
        height: '125px',
        width: '125px',
        border: 'solid 2px rgb(228, 130, 74)',
        borderRadius: '50%',
        backgroundColor: 'black',
        color: 'rgb(228, 130, 74)',
        textTransform: 'none',
        marginBottom: '0px',
        '&:hover': {
            border: 'solid 4px rgb(228, 130, 74)',
        }
    },
    
    buttonCodingChallenges:{
        fontSize: '20px',
        height: '125px',
        width: '125px',
        border: 'solid 2px rgb(228, 130, 74)',
        borderRadius: '50%',
        backgroundColor: 'black',
        color: 'rgb(228, 130, 74)',
        textTransform: 'none',
        marginBottom: '0px',
        marginTop: '50px',
        '&:hover': {
            border: 'solid 4px rgb(228, 130, 74)',
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
                <Button className={classes.buttonStyles} >Up</Button>
            </Link>
            <Link
                    activeClass="active"
                    to="navBar"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration= {500}
            >
                <Button className={classes.buttonCodingChallenges} >Coding Challenges</Button>
            </Link>
            <br></br>
            <ArrowDownwardIcon className={classes.arrowStyles} />

        </div>
    )
}

export default ScrollUp;