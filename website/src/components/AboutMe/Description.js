import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Link } from 'react-scroll'
const useStyles = makeStyles(() => ({
    description: {
        backgroundColor: 'black',
        width: '90%',
        height: 'auto',
        marginLeft: '40px',
        color: 'rgb(228, 130, 74)',
        fontFamily: 'roboto',
        fontSize: '40px',
    },

    text:{
        textAlign: 'left',
    },

    myName:{
        fontSize:'50px',
        borderBottom: '1px solid rgb(228, 130, 74)'
    },

    arrow:{
        color: 'white',
        fontSize: '40px',
        cursor: 'pointer',
        '&:hover':{
            opacity: '0.7'
        }
    }
    
}));
const Description = () =>{
    const classes = useStyles();
    return (
        <div className={classes.description}>
            <section className={classes.text}>
                <p className={classes.paragraph}>Life Long Learner
                -that's the best way to describe me. Whether it is studying math proofs and algorithms as a college student, crafting a well-thought out lesson as a math teacher, or designing a beautiful and consistent website, I always give it my all.<br></br><br></br>
                I am a self taught developer based out of Denver,Colorado who has strong skills in React JS front-end development. In fact, I designed this whole site in React. Although, I am mostly focused in front-end development, I have experience building APIs in Node libraries such as Node.express, managing databases using mongoDB, and authenticating login info using passport-jwt.
                Even though, I have little work experience, I am an extremely hard worker, fast-learner, effective communicator, and creative designer. Everyday, I am not only gaining a vast amount of knowledge, but also testing that knowledge in projects. Check out my projects below 
                <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}>
                    <ArrowDownwardIcon className={classes.arrow}/>
                </Link>
                </p>
            </section>
        </div>
    )
}

export default Description;