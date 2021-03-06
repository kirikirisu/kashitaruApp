import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  button: {
    textDecoration: 'none',
  },
});

const AlreadySignIn = () => {
  const classes = useStyles();

  return (
    <div>
      <p>ログインしました!!</p>
      <Button size="small" component={RouterLink} to="/" className={classes.button}>
        戻る
      </Button>
    </div>
  );
};

export default AlreadySignIn;
