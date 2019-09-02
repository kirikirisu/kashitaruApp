import { combineReducers } from 'redux';
import shareFormReducer from './shareFormReducer';
import shareInformatiosReducer from './shareInformatiosReducer';
import signUpFormReducer from './signUpFormReducer';
import signInFormReducer from './signInFormReducer';
import userInformationsReducer from './userInformationsReducer';

const rootReducer = combineReducers({
  shareForm: shareFormReducer,
  shareInformations: shareInformatiosReducer,
  signUpForm: signUpFormReducer,
  signInForm: signInFormReducer,
  userInformations: userInformationsReducer,
});

export default rootReducer;
