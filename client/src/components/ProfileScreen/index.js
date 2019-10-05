import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink, Route, Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Textsms from '@material-ui/icons/Textsms';
import NormalCard from './NormalCard';
import Heading from './Heading';
import getProfile from '../../utils/getProfile';
import PromptGoAnyScreen from '../PromptComponent/index';
import key from '../../utils/listKeyGenerator';

const useStyles = makeStyles((theme) => ({
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

const ProfileScreen = ({
  id,
  name,
  isLogin,
  profileIsFetching,
  user,
  product,
  ...rest
}) => {
  const classes = useStyles();

  useEffect(() => {
    getProfile(id, rest);
  }, []);

  const renderProfile = () => {
    console.log(user, product);
    const {
      id: pulledUserId,
      name: pulledUserName,
      avatar,
      comment,
    } = user;
    let profileName = '';
    let title = '';
    let subTitle = '';
    if (id === pulledUserId) {
      profileName = name;
      title = 'あなたのプロフィール';
      subTitle = 'ログイン情報を確認';
    } else {
      profileName = pulledUserName;
      title = 'あなたのプロフィール';
      subTitle = 'ログイン情報を確認';
    }
    return (
      <div>
        {profileIsFetching
          ? (
            <h1>Now Loading</h1>
          )
          : (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Heading title={title} subTitle={subTitle} />
              <br />
              <List className={classes.root}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src={avatar} className={classes.bigAvatar} />
                  </ListItemAvatar>
                  <ListItemText primary={profileName} secondary="ニックネーム" />
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
              <Button component={RouterLink} to="/setting">プロフィール更新</Button>
              <Heading title="あなたの貸し出し一覧" subTitle="シェアしている情報を確認" />
              <br />
              <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                  {product.map((share) => (
                    <Grid key={key()} item>
                      <NormalCard
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
            </Box>
          )}
      </div>
    );
  };


  const isSetting = () => {
    return (
      <div>
        {name // プロフィール設定がしてあるかどうかはログインした時に持ってくるプロフィール情報の名前があるかないかで判断
          ? (
            renderProfile()
          )
          : <PromptGoAnyScreen p="プロフィールを設置しましょう" to="/setting" btn="プロフィール設置画面へ" />}
      </div>
    );
  };

  return (
    <Route
      render={() => (
        isLogin ? (
          isSetting()
        ) : (
            <Redirect to="signIn" />) // ログインしてなければログインページへリダイレクト
      )}
    />
  );
};

export default ProfileScreen;
