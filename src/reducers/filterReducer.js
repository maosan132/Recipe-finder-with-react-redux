import { CHANGE_FILTER } from '../actions/constants';

const filterReducer = (state = null, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
