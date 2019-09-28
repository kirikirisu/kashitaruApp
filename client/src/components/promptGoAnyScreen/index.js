import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  button: {
    textDecoration: 'none',
  }
});

const PromptSignInScreen = ({ p, to, btn }) => {

  const classes = useStyles();

  return (
    <div>
      <p>{p}</p>
      <Button size="small" component={RouterLink} to={to} className={classes.button}>
        {btn}
      </Button>
    </div>
  );
};

export default PromptSignInScreen;
