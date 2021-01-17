import { SET_FILTERS, SHOW_MORE_JOBS } from '../types';

const initialState = {
  filters: {
    description: '',
    location: '',
    full_time: '',
  },
  count: 15,
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };
    case SHOW_MORE_JOBS:
      return {
        ...state,
        count: state.count + 15,
      };
    default:
      return state;
  }
};

export default filterReducer;
