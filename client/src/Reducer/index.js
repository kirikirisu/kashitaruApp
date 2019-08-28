import { combineReducers } from 'redux';
import shareFormReducer from './shareFormReducer';
import shareInformatiosReducer from './shareInformatiosReducer';

const rootReducer = combineReducers({
    shareForm: shareFormReducer,
    shareInformations: shareInformatiosReducer,
});

export default rootReducer;
