import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnit';
import TitleIcon from '@material-ui/icons/Title';
import { Link } from "react-scroll";


const useStyles = makeStyles((theme) => ({
    typographyStyles: {
        flex: 1,
        color: 'rgb(228, 130, 74)',
        fontSize: '40px',
        marginTop: '40px',
        marginLeft: '0px',
        marginRight: '10px'
    },

    root: {
        boxShadow: "none",
        backgroundColor: "#000000",
        height: '70px',
    },

    titleIcon: {
        color: 'rgb(228, 130, 74)',
        marginTop: '40px',
        marginRight: '10px',
        fontSize: '50px',
        border: 'solid 2px rgb(228, 130, 74)'

    },

    links:{
        marginTop: '50px',
        marginRight: '0px',
        
    },

    aboutLink:{
        color: 'rgb(228, 130, 74)',
        fontSize: '20px',
        marginRight: '30px'
    },

    projects:{
        color: 'rgb(228, 130, 74)',
        fontSize: '20px',
        marginRight: '35px',
        textDecoration: 'underline',
        cursor: 'pointer'
    }
    
}))

const NavBar = () => {
    const classes = useStyles();
    const preventDefault = (event) => event.preventDefault();
    return(
        <AppBar position="static" className={classes.root} id="navBar">
            <Toolbar>
                <Typography className={classes.typographyStyles}>
                    Thomas Defilippis
                </Typography>
                <Typography className={classes.links}>
                    <Link
                        activeClass="active"
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        className={classes.projects}
                    >
                        Projects
                    </Link>
                    <Link href="#" onClick={preventDefault} className={classes.aboutLink}>
                        About
                    </Link>
                </Typography>
                <TitleIcon className={classes.titleIcon}/>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;