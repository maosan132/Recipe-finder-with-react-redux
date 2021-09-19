import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  filter: filterReducer,
});

export default rootReducer;
