import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
// import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  recipe: recipesReducer,
});

export default rootReducer;
