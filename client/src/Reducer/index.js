import { combineReducers } from 'redux';
import shareFormReducer from './shareFormReducer';
import charactersReducer from './charactersReducer';

const rootReducer = combineReducers({
    shareForm: shareFormReducer,
    characters: charactersReducer,
});

export default rootReducer;
