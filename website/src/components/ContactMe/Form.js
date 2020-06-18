import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, Typography } from '@material-ui/core';
const useStyles = makeStyles(() => ({
    root:{
        '& label.Mui-focused': {
            color: 'rgb(228, 130, 74)',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'rgb(228, 130, 74)',
          },
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: 'rgb(228, 130, 74)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'rgb(228, 130, 74)',
            },
          },
    },

    typographyStyles:{
        marginBottom: '50px'
    },

    header:{
        fontSize:'50px',

    },

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

    textField:{
            backgroundColor: 'white',
            width: 'auto',
            marginBottom: '20px',
    },

    message:{
        backgroundColor: 'white',
        width: '91%',
    },

    paragraph:{
        fontSize: '20px',

    },

    emailLink:{
        textDecoration: 'underline',
        cursor: 'pointer',
        color: 'rgb(228, 130, 74)',
        '&:hover':{
            opacity: '0.7'
        }
    }
}));
const Description = () =>{
    const classes = useStyles();
    return (
        <div className={classes.description}>
            <Typography className={classes.typographyStyles}>
                    <h1 className={classes.header}>Get in touch</h1>
                    <p className={classes.paragraph}>If you want to get in touch, fill out the form below or send an email to <a className={classes.emailLink} href="mailto:thomasdefilippis@gmail.com?subject=Portfolio">thomasdefilippis@gmail.com</a></p>
            </Typography>
            <form noValidate className={classes.root} autoComplete="off">
                <TextField 
                    id="outlined-basic" 
                    label="Full Name" 
                    variant="outlined" 
                    InputProps={{
                        className: classes.textField
                    }}
                />
                <br></br>
                <TextField 
                    id="outlined-basic" 
                    label="e-mail" 
                    variant="outlined" 
                    InputProps={{
                        className: classes.textField
                    }}
                />
                <br></br>
                <TextField 
                    id="outlined-basic" 
                    label="Message" 
                    variant="outlined" 
                    multiline={true}
                    rows={12} 
                    className={classes.message}
                    animate={false}
                />
            </form>
        </div>
    )
}

export default Description;