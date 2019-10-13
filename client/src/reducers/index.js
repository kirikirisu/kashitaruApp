import { combineReducers } from 'redux';
import share from './share';
import getShare from './getShare';
import signUp from './signUp';
import signIn from './signIn';
import user from './user';
import profile from './profile';
import chat from './chat';
import setting from './setting';

const rootReducer = combineReducers({
  share,
  getShare,
  signUp,
  signIn,
  user,
  profile,
  chat,
  setting,
});

export default rootReducer;
