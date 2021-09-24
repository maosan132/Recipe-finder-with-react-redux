// import { useState } from 'react';
import axios from 'axios';
import {
  httpRequest,
  httpRequestSuccess,
  httpRequestFailure,
} from '../actions/index';

const fetchRecipes = () => async (dispatch) => {
  try {
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=b';
    dispatch(httpRequest);
    const request = await axios.get(url);
    const res = request.data;
    // console.log('res', res);
    dispatch(httpRequestSuccess(res));
  } catch (error) {
    dispatch(httpRequestFailure(error));
  }
};

export default fetchRecipes;
