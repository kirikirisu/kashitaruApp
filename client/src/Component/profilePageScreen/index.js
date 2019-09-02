import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Heading from '../headingComponent/index';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Face from '@material-ui/icons/Face';
import VpnKey from '@material-ui/icons/VpnKey';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Grid from '@material-ui/core/Grid';
import Card from '../cardComponent/index';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '100vw',
    maxWidth: 800,
  },
}));

const ProfilePageScreen = ({ store }) => {
  const classes = useStyles();
  const { name, password } = store.userInformations.userInfor;
  const { share } = store.userInformations;

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Heading title='あなたのプロフィール' subTitle='ログイン情報を確認' />
      <br />
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Face />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="ニックネーム" secondary={name} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <VpnKey />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="パスワード" secondary={password} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
      <Heading title='あなたの貸し出し一覧' subTitle='シェアしている情報を確認' />
      <br />
      <Grid item xs={6}>
        <Grid container justify="center" spacing={2}>
          {share.map(shareElement => (
            <Grid key={shareElement._id} item>
              <Card productName={shareElement.productName} name={shareElement.name} comment={shareElement.comment} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfilePageScreen;
