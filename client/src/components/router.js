import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Drawer from './DrawerLeftComponent/index';
import HomeScreen from './HomeScreen/index';
import ShareScreen from '../containers/ShareScreen';
import RentScreen from '../containers/RentScreen';
import ChatScreen from '../containers/ChatScreen';
import SignUpScreen from '../containers/SignUpScreen';
import SignInScreen from '../containers/SignInScreen';
import ProfileScreen from '../containers/ProfileScreen';
import SettingScreen from '../containers/SettingScreen';

const HomePage = () => (
  <Drawer screen={<HomeScreen />} title="KASHITARU" />
);

const SharePage = () => (
  <Drawer screen={<ShareScreen />} title="シェアする" />
);

const RentPage = () => (
  <Drawer screen={<RentScreen />} title="借りる" />
);

const SignUpPage = () => (
  <Drawer screen={<SignUpScreen />} title="サインアップ" />
);

const SignInPage = () => (
  <Drawer screen={<SignInScreen />} title="サインイン" />
);

const ProfilePage = () => (
  <Drawer screen={<ProfileScreen />} title="マイプロフィール" />
);

const SettingPage = () => (
  <Drawer screen={<SettingScreen />} title="セッティング" />
);

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/share" component={SharePage} />
      <Route exact path="/rent" component={RentPage} />
      <Route exact path="/chat" component={ChatScreen} />
      <Route exact path="/signUp" component={SignUpPage} />
      <Route exact path="/signIn" component={SignInPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/setting" component={SettingPage} />
    </div>
  </BrowserRouter>
);

export default Router;
