import React, { useEffect } from 'react';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Heading from '../headingComponent/index';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Textsms from '@material-ui/icons/Textsms';
import PromptGoAnyScreen from '../promptGoAnyScreen/index';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ProfileCard from '../profileCardComponent/index';

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



const renderProfile = (
  classes,
  name,
  avatar,
  comment,
  userShareInformation,
  isFechingShareInfor,
  ) => {

  return (
    <div>
      {name                          // プロフィール設定がしてあるかどうかはログインした時に持ってくるプロフィール情報の名前があるかないかで判断
        ? <Box display="flex" flexDirection="column" alignItems="center">
          <Heading title='あなたのプロフィール' subTitle='ログイン情報を確認' />
          <br />
          <List className={classes.root}>
            <ListItem>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={avatar} className={classes.bigAvatar} />
              </ListItemAvatar>
              <ListItemText primary={name} secondary="ニックネーム" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <Textsms />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={comment} secondary="コメント" />
            </ListItem>
          </List>
          <Button component={RouterLink} to='/settingProfile'>プロフィール更新</Button>
          <Heading title='あなたの貸し出し一覧' subTitle='シェアしている情報を確認' />
          <br />
          <div>
            {isFechingShareInfor
              ? <h1>Now Loading</h1>
              : <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                  {userShareInformation.map((share, index) => (
                    <Grid key={index} item>
                      <ProfileCard
                        productName={share.productName}
                        img={share.productImg}
                        description={share.description}
                        price={share.price}
                        period={share.period}
                        shippingArea={share.shippingArea}
                        days={share.days}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            }
          </div>
        </Box>
        : <PromptGoAnyScreen p='プロフィールを設置しましょう' to='/settingProfile' btn='プロフィール設置画面へ' />
      }
    </div>
  );
};

const ProfilePageScreen = ({
  isLogin,
  id,
  name,
  avatar,
  comment,
  userShareInformation,
  isFechingShareInfor,
  requestUserShareInformation,
  receiveUserShareInformationSuccess,
  receiveUserShareInformationFailed
}) => {
  const classes = useStyles();

  useEffect(() => {
    requestUserShareInformation();
    axios.post('/api/user/shareInformation', { id })
      .then(response => {
        const userShareInformation = response.data;
        receiveUserShareInformationSuccess(userShareInformation);
      })
      .catch(err => {
        console.error(new Error(err))
        receiveUserShareInformationFailed();
      })
  }, []);

  return (
    <div>
      {isLogin                                  // ログインしているかで分岐
        ? renderProfile(                        // ログインしていたらプロフィール画面を表示
          classes,
          name,
          avatar,
          comment,
          userShareInformation,
          isFechingShareInfor)
        : <PromptGoAnyScreen p='ログインしましょう' to='/signIn' btn='ログイン画面へ' />
      }
    </div>
  );
}

export default ProfilePageScreen;
