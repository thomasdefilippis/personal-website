import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
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
    }
    
    
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
  }
});

export default function ProjectCard(props) {
  const classes = useStyles();
  const {title, imageUrl, description, gifUrl, sourceLink} = props;
  return (
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
        <Button size="small" color="primary" className={classes.links}>
          Preview
        </Button>
        <Button size="small" color="primary" className={classes.links}>
          Source Code
        </Button>
      </CardActions>
    </Card>
  );
}

