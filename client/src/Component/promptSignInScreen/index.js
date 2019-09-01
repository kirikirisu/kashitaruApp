import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  button: {
    textDecoration: 'none',
  }
});

const PromptSignInScreen = () => {

  const classes = useStyles();

  return (
    <div>
      <p>ログインしてください！！</p>
      <Button size="small" component={RouterLink} to="/signIn" className={classes.button}>
        ログインページへ
      </Button>
    </div>
  );
};

export default PromptSignInScreen;
