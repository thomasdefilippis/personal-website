import React from 'react';
import { makeStyles, Grid, Button } from '@material-ui/core';
import CodingChallengeData from './CodingChallengeData';
import ProjectCard from './ProjectCard';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { Link } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: 'black',
        width: '100%',
        height: 'auto',
        textAlign: 'center',
        marginBottom: '200px',
        marginTop: '100px'
    },

    header:{
        color: 'rgb(228, 130, 74)',
        fontFamily: 'roboto',
        fontSize: '40px'
    },

    arrowStyles:{
        position: 'relative',
        fontSize: '100px',
        color: "rgb(228, 130, 74)"
    },

    title:{
        width: '100%',
        height: 'auto',
        borderBottom: 'solid 3px rgb(228, 130, 74)',
        borderTop: 'solid 3px rgb(228, 130, 74)',
        marginTop: '70px'
    },

    codingChallenges:{
        marginTop: '100px'
    },

    projectContainer:{
        textAlign: 'left'
    },

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

}))


const CodingChallenges = () =>{
    const classes = useStyles();
    const getProjectCard = (projectObj) => {
        const {title, imageUrl, description, gifUrl, sourceLink} = projectObj;
        return(
            <Grid item xs={12} md={4} className={classes.projectContainer} key={title}>
                <ProjectCard projectObj={ projectObj } />
            </Grid>
        )
    }
    return(
        <div className={classes.root}>
            <ArrowUpwardIcon className={classes.arrowStyles} 
            id="codingChallenges"/>
            <br></br>
            <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
            >
                <Button className={classes.buttonStyles} >Up</Button>
            </Link>
            <header className={classes.title} >
                <h1 className={classes.header}>Coding Challenges</h1>
            </header>
            <section>
                <Grid container direction='row' className={classes.codingChallenges} >
                    <Grid item className={classes.example} xs={false} sm={1} md={1} lg={2} xl={2}>
                    </Grid>
                    <Grid item className={classes.example} xs={12} sm={10} md={10} lg={8} xl={8}>
                        <Grid container direction="row" spacing={4}>
                            {CodingChallengeData.map(projectObj => getProjectCard(projectObj))}

                        </Grid>
                    </Grid>
                    <Grid item className={classes.example} xs={false} sm={1} md={1} lg={2} xl={2}>
                    </Grid>
                    </Grid>
            </section>
        </div>
    )
}

export default CodingChallenges;