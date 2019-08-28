import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';


const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  button: {
    textDecoration: 'none',
  }
});

const SimpleCard = ({
  id,
  productName,
  companyName,
  comment
}) => {
  const classes = useStyles();

  return (
    <div value={id}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {productName}
          </Typography>
          <Typography variant="h6" component="h2">
            {companyName}
          </Typography>
          <br />
          <Typography paragraph component="h2">
            {comment}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" component={RouterLink} to="rentForm" className={classes.button}>借りる</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default SimpleCard;
