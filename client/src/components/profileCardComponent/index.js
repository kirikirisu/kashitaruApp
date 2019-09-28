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
  card: {
    maxWidth: 345,
    minwidth: 300,
  },
  media: {
    height: 140,
  },
});

const ProfileCard = ({
  productName,
  img,
  description,
  price,
  period,
  shippingArea,
  days,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {productName}
          </Typography>
          <Typography variant="body2" component="h4">
            {description}
          </Typography>
          <Typography paragraph>価格:{price}</Typography>
          <Typography paragraph>貸し出し期間:{period}</Typography>
          <Typography paragraph>発送元エリア:{shippingArea}</Typography>
          <Typography paragraph>発送日数:{days}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          内容変更
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProfileCard;
