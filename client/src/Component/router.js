import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Drawer from './persistentDrawerLeftComponent/index';
import TopPageScreen from './topPageScreen/index';
import SharePageScreen from '../containers/sharePageScreen';
import RentPageScreen from '../containers/rentPageScreen';
import ChatPageScreen from '../containers/chatScreenComponent';
import SignUpPageScreen from '../containers/signUpPageScreen';
import SignInPageScreen from '../containers/signInPageScreen';
import ProfilePageScreen from '../containers/profilePageScreen';
import SettingProfilePageScreen from '../containers/settingProfilePageScreen';

const TopPage = () => (
  <Drawer screen={<TopPageScreen />} />
);

const SharePage = () => (
  <Drawer screen={<SharePageScreen />} />
);

const RentPage = () => (
  <Drawer screen={<RentPageScreen />} />
);

const ChatPage = () => (
  <Drawer screen={<ChatPageScreen />} />
);

const SignUpPage = () => (
  <Drawer screen={<SignUpPageScreen />} />
);

const SignInPage = () => (
  <Drawer screen={<SignInPageScreen />} />
);

const ProfilePage = () => (
  <Drawer screen={<ProfilePageScreen />} />
);

const SettingProfilePage = () => (
  <Drawer screen={<SettingProfilePageScreen />} />
);

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={TopPage} />
      <Route exact path="/share" component={SharePage} />
      <Route exact path="/rent" component={RentPage} />
      <Route exact path="/chat" component={ChatPage} />
      <Route exact path="/signUp" component={SignUpPage} />
      <Route exact path="/signIn" component={SignInPage} />
      <Route exact path="/profile" component={ProfilePage} />
      <Route exact path="/settingProfile" component={SettingProfilePage} />
    </div>
  </BrowserRouter>
);

export default Router;
