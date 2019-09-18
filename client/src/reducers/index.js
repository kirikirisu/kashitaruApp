import { combineReducers } from 'redux';
import share from './share';
import getShare from './getShare';
import signUp from './signUp';
import signIn from './signIn';
import user from './user';
import profile from './profile';

const rootReducer = combineReducers({
  share,
  getShare,
  signUp,
  signIn,
  user,
  profile,
});

export default rootReducer;
