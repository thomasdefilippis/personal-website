import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() => ({
    description: {
        backgroundColor: 'black',
        width: '90%',
        height: 'auto',
        marginTop: '90px',
        paddingLeft: '50px',
        color: 'rgb(228, 130, 74)',
        fontFamily: 'roboto',
        fontSize: '40px',
    },

    myFace:{
        borderRadius: '40%'
    },

    myName:{
        fontSize:'50px',
        borderBottom: '1px solid rgb(228, 130, 74)'
    }
    
}));
const Description = () =>{
    const classes = useStyles();
    return (
        <div className={classes.description}>
            <header>
                <strong className={classes.myName}>Thomas Defilippis</strong> -Life Long Learner
            </header>
        </div>
    )
}

export default Description;