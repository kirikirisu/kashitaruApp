import { combineReducers } from 'redux';
import formReducer from './formReducer';
import charactersReducer from './charactersReducer';

const rootReducer = combineReducers({
    form: formReducer,
    characters: charactersReducer,
});

export default rootReducer;
