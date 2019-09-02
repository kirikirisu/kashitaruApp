import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '100vw',
    maxWidth: 800,
  },
}));

const Heading = ({ title, subTitle }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <Typography component="p">
          <Box component="span" m={1}>{subTitle}</Box>
        </Typography>
      </Paper>
    </div>
  );
}

export default Heading;
