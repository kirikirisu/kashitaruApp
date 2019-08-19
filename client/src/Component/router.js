import React from 'react';
import TopPage from './topPageScreen/index';
import RentPage from '../Container/rentPageScreen';
import SharePage from '../Container/sharePageScreen';
import { BrowserRouter, Route } from 'react-router-dom'

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
