import {
  JOBSLIST_GET_REQUEST,
  JOBSLIST_GET_SUCCESS,
  JOBSLIST_GET_FAILURE,
  SET_FILTERS,
  LOAD_MORE,
  RESET_PAGINATION,
} from '../types';

const initialState = {
  loading: null,
  jobs: [],
  filters: {},
  page: 1,
};

const jobsList = (state = initialState, action) => {
  switch (action.type) {
    case JOBSLIST_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case JOBSLIST_GET_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
        loading: false,
      };

    case JOBSLIST_GET_FAILURE:
      return {
        ...state,
        jobs: {},
        loading: false,
      };

    case SET_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };

    case LOAD_MORE:
      return {
        ...state,
        page: state.page + 1,
      };

    case RESET_PAGINATION:
      return {
        ...state,
        page: 1,
      };

    default:
      return state;
  }
};

export default jobsList;
