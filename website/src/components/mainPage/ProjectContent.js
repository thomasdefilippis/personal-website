import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProjectCard from './ProjectCard';
import ProjectData from './ProjectData';



const useStyles = makeStyles((theme) => ({
    typographyStyles:{
        color: 'white',
    }
    
}))

const ProjectContent = () =>{
    const classes = useStyles();
    const getProjectCard = (projectObj) => {
        const {title, imageUrl, description, edabit, gifUrl, sourceLink} = projectObj;
        return(
            <Grid item xs={12} md={4} className={classes.projectContainer} key={title}>
                <ProjectCard projectObj={ projectObj } />
            </Grid>
        )
    }
    return(
        <Grid container direction="row" spacing={4}>
                {ProjectData.map(projectObj => getProjectCard(projectObj))}

        </Grid>
    )
}


export default ProjectContent;

