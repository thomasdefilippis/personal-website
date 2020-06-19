import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ModalComponent from './Modal';

const useStyles = (theme) =>({
  root: {
    maxWidth: 345,
    backgroundColor: 'black',
    border: 'solid 3px rgb(228, 130, 74)',
    height: 'auto',
    margin: '0 auto',
    padding: '5px',
    '&:hover': {
        borderRadius: '15%',
        opacity: '0.8'
    },
    
    
  },

  typographyStyles:{
      color: 'rgb(228, 130, 74)'
  },

  links:{
      color: "#396395",
      opacity: '0.9',
      paddingBottom: '30px',
      "&:hover": {
          textDecoration: 'underline',
          opacity: '1.0'
      }
  },

  sourceLink:{
    textDecoration: 'none'
  },

  builtWith: {
    fontSize: '20px',
  },

});

class ProjectCard extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      open: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    console.log(this.state.open);
    if(this.state.open === false){
      this.setState({
        open: true
      })
    }
    else{
      this.setState({
        open: false
      })
    }
  }
  render(){
   
  const { classes } = this.props;
  const {title, imageUrl, description, gifUrl, sourceLink} = this.props.projectObj;
    return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia

            component='img'
            alt={title}
            height="300"
            image= {imageUrl}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.typographyStyles}>
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p" className={classes.typographyStyles}>
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions >
          <Button size="small" color="primary" className={classes.links} onClick={this.handleClick}>
            Preview
          </Button>
          <a href={sourceLink} target="_blank" className={classes.sourceLink}>
            <Button size="small" color="primary" className={classes.links} >
              Source Code
            </Button>
          </a>
        </CardActions>
      </Card>
      <ModalComponent open={this.state.open} onClick={this.handleClick} title={title} gifUrl={gifUrl}/>
    </div>
    )
  };
}

export default withStyles(useStyles)(ProjectCard);

