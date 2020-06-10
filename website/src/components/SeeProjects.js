import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
    buttonContainerStyles: {
        position: 'relative',
        width: '150px',
        height: '300px',
        left: "-38px",
        top: '300px',
        margin: '0 auto',
        textAlign: 'center',
    },

    buttonStyles:{
        fontSize: '25px',
        border: 'solid 1px black',
        borderRadius: '15%',
        backgroundColor: 'black',
        color: 'rgb(228, 130, 74)',
        textTransform: 'none',
        marginBottom: '10px',
        '&:hover': {
            marginBottom: '300px',
            border: 'solid 4px rgb(228, 130, 74)',
            background: '#000000'
        }
    },
    arrowStyles:{
        fontSize: '100px',
        marginLeft: '5px'
    }
    
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
                <Button className={classes.buttonStyles} >See <br></br>Projects</Button>
            </Link>
            
            <br></br>
            <ArrowDownwardIcon className={classes.arrowStyles} />
        </div>
    )
}


export default SeeProjects;