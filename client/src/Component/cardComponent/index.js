import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import Textsms from '@material-ui/icons/Textsms';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    margin: 10,
  },
}));

const ProductCard = ({
  productName,
  img,
  description,
  price,
  period,
  shippingArea,
  days,
  name,
  avatar,
  comment
}) => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} src={avatar} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader="投稿日2019_3_9"
      />
      <CardMedia
        className={classes.media}
        image={img}
        title="product image"
      />
      <CardContent>
        <Typography variant="h6" color="textSecondary" component="p">
          {productName}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="chat">
          <Textsms />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>商品説明:</Typography>
          <Typography paragraph>
            {description}
          </Typography>
          <Typography paragraph>価格:</Typography>
          <Typography paragraph>
            {price}
          </Typography>
          <Typography paragraph>貸し出し期間:</Typography>
          <Typography paragraph>
            {period}
          </Typography>
          <Typography paragraph>発送元エリア:</Typography>
          <Typography paragraph>
            {shippingArea}
          </Typography>
          <Typography paragraph>発送日数:</Typography>
          <Typography paragraph>
            {days}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ProductCard;
