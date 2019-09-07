import { combineReducers } from 'redux';
import shareFormReducer from './shareFormReducer';
import shareInformatiosReducer from './shareInformatiosReducer';
import signUpFormReducer from './signUpFormReducer';
import signInFormReducer from './signInFormReducer';
import userInformationsReducer from './userInformationsReducer';
import settingProfileFormReducer from './settingProfileFormReducer';

const rootReducer = combineReducers({
  shareForm: shareFormReducer,
  shareInformations: shareInformatiosReducer,
  signUpForm: signUpFormReducer,
  signInForm: signInFormReducer,
  userInformations: userInformationsReducer,
  settingProfileForm: settingProfileFormReducer,
});

export default rootReducer;
