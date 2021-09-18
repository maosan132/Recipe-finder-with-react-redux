import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
} from '../actions/constants';

const initialState = {
  recipes: {
    meals: [],
  },
  loading: false,
  error: '',
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SUCCESS:
      return {
        loading: false,
        meals: action.payload,
        error: '',
      };
    case FETCH_FAILURE:
      return {
        loading: false,
        meals: {},
        error: action.payload,
      };
    default:
      return state;
  }
};

export default recipesReducer;
