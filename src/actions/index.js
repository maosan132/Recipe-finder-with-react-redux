import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  CHANGE_FILTER,
} from './constants';

export const httpRequest = () => ({
  type: FETCH_REQUEST,
});

export const httpRequestSuccess = (recipes) => {
  console.log('action', recipes);
  return {
    type: FETCH_SUCCESS,
    payload: recipes,
  };
};

export const httpRequestFailure = (error) => ({
  type: FETCH_FAILURE,
  payload: error,
});

export const filterRecipes = (category) => ({
  type: CHANGE_FILTER,
  payload: category,
});
