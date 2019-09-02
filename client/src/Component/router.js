import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Drawer from './persistentDrawerLeftComponent/index';
import TopPageScreen from '../Component/topPageScreen/index';
import SharePageScreen from '../Container/sharePageScreen';
import RentPageScreen from '../Container/rentPageScreen';
import ChatAppComponent from '../Component/ChatAppComponent';
import SignUpPageScreen from '../Container/signUpPageScreen';
import SignInPageScreen from '../Container/signInPageScreen';
import ProfilePageScreen from '../Container/profilePageScreen';

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
  <Drawer screen={<ChatAppComponent />} />
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

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={TopPage} />
      <Route exact path='/share' component={SharePage} />
      <Route exact path='/rent' component={RentPage} />
      <Route exact path='/chat' component={ChatPage} />
      <Route exact path='/signUp' component={SignUpPage} />
      <Route exact path='/signIn' component={SignInPage} />
      <Route exact path='/profile' component={ProfilePage} />
    </div>
  </BrowserRouter>
);

export default Router;
