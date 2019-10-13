import React from 'react';
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
  name: currentUserName,
  isLogin,
  profileIsFetching,
  user,
  product,
}) => {
  const classes = useStyles();

  const renderProfile = () => {
    // console.log(user, product);
    const {
      id: pulledUserId,
      name,
      avatar,
      comment,
    } = user;

    let firstTitle = '';
    let secondTitle = '';
    if (id === pulledUserId) { // 自分のプロフィールか他の人のプロフィールか判断
      firstTitle = 'あなたのプロフィール';
      secondTitle = 'あなたのシェア情報';
    } else {
      firstTitle = `${name}のプロフィール`;
      secondTitle = `${name} のシェア情報`;
    }
    return (
      <div>
        {profileIsFetching
          ? (
            <h1>Now Loading</h1>
          )
          : (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Heading title={firstTitle} subTitle="プロフィールを確認" />
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
              <Button component={RouterLink} to="/setting">プロフィール更新</Button>
              <Heading title={secondTitle} subTitle="シェア情報を確認" />
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
        {currentUserName // プロフィール設定がしてあるかどうかはログインした時に持ってくるプロフィール情報の名前があるかないかで判断
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
