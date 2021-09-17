import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  CHANGE_FILTER,
} from './constants';

export const recipeRequest = () => ({
  type: FETCH_REQUEST,
});

export const recipeRequestSuccess = (recipes) => ({
  type: FETCH_SUCCESS,
  payload: recipes,
});

export const recipeRequestFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});

export const recipeFilterAction = (category) => ({
  type: CHANGE_FILTER,
  payload: category,
});
