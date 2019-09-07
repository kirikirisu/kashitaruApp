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
import PromptGoAnyScreen from '../promptGoAnyScreen/index';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    width: '100vw',
    maxWidth: 800,
  },
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },
}));

const renderProfile = (classes, store) => {

  const { name, avatar, comment } = store.userInformations.userInfor;

  return (
    <div>
      {name
        ? <Box display="flex" flexDirection="column" alignItems="center">
          <Heading title='あなたのプロフィール' subTitle='ログイン情報を確認' />
          <br />
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={avatar} className={classes.bigAvatar} />
              </ListItemAvatar>
              <ListItemText primary="ニックネーム" secondary={name} />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <VpnKey />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="コメント" secondary={comment} />
            </ListItem>
          </List>
          <Heading title='あなたの貸し出し一覧' subTitle='シェアしている情報を確認' />
          <Button component={RouterLink} to='/settingProfile'>プロフィール更新</Button>
        </Box>
        : <PromptGoAnyScreen p='プロフィールを設置しましょう' to='/settingProfile' btn='プロフィール設置画面へ' />
      }
    </div>
  );
};

const ProfilePageScreen = ({ store }) => {
  const { share, isLogin } = store.userInformations;
  const classes = useStyles();

  return (
    <div>
      {isLogin
        ? renderProfile(classes, store)
        : <PromptGoAnyScreen p='ログインしましょう' to='/signIn' btn='ログイン画面へ' />
      }
    </div>
  );
}

export default ProfilePageScreen;


/*
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
      */