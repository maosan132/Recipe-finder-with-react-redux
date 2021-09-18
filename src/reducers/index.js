import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
// import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  recipesReducer,
});

export default rootReducer;
