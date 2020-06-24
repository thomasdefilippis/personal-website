import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core';

const useStyles = makeStyles(() => ({

    buttonStyles:{
        fontSize: '20px',
        border: 'solid 2px rgb(228, 130, 74)',
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

    ContactMeButton:{
        fontSize: '20px',
        border: 'solid 1px rgb(228, 130, 74)',
        borderRadius: '50%',
        backgroundColor: 'rgb(228,130,74)',
        color: 'black',
        textTransform: 'none',
        width: '120px',
        height: '120px',
        '&:hover': {
            border: 'solid 4px rgb(228, 130, 74)',
            background: '#000000',
            color: 'rgb(228, 130, 74)'
        }
    },


    line:{
        height: '40px',
        borderLeft: '3px solid rgb(228, 130, 74)',
        width: '5px',
        marginLeft: '60px',

    },

    Link: {
        textDecoration: 'none'
    }
    
}));

const ContactLinks = () =>{
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
                <Button className={classes.ContactMeButton} >Contact <br></br>Me</Button>
            </Link>
            <div className={classes.line}>

            </div>
            <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1gjddR9ouFWNtRT4nRRxqtYcLG1RAE9Gj/view?usp=sharing" className={classes.Link}>
                <Button className={classes.buttonStyles} > Resume</Button>
           </a>
        </div>
    )
}

export default ContactLinks;