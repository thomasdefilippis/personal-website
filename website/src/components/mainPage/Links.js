import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core';

const useStyles = makeStyles(() => ({

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
        transform: 'skewY(20deg)'

    },

    Link: {
        textDecoration: 'none'
    }
    
}));

const Links = () =>{
    const classes = useStyles();
    return(
        <div>
            <Link
                to='/AboutMe'
                className={classes.Link}
            >
                <Button className={classes.buttonStyles} >About<br></br>Me</Button>
            </Link>
            <div className={classes.line}>

            </div>
            <Link
                        to='/ContactMe'
                        className={classes.Link}
            >
                <Button className={classes.buttonStyles} >Contact <br></br>Me</Button>
            </Link>
            <div className={classes.line}>

            </div>
            <Link
                        to='/404'
                        className={classes.Link}
            >
                <Button className={classes.buttonStyles} > Resume</Button>
            </Link>
           
        </div>
    )
}

export default Links;