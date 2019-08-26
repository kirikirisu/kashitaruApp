import React from 'react';
import Drawer from './persistentDrawerLeftComponent/index';
import TopPageScreen from './topPageScreen/index';
import SharePageScreen from '../Container/sharePageScreen';
import RentPageScreen from '../Container/rentPageScreen';
import { BrowserRouter, Route } from 'react-router-dom';

const TopPage = () => (
  <Drawer screen={<TopPageScreen />} />
);

const SharePage = () => (
  <Drawer screen={<SharePageScreen />} />
);

const RentPage = () => (
  <Drawer screen={<RentPageScreen />} />
);

const Router = () => (
  <BrowserRouter>
    <div>
      <Route exact path='/' component={TopPage} />
      <Route path='/share' component={SharePage} />
      <Route path='/rent' component={RentPage} />
    </div>
  </BrowserRouter>
);

export default Router;
