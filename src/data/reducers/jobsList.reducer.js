import {
  JOBSLIST_GET_REQUEST,
  JOBSLIST_GET_SUCCESS,
  JOBSLIST_GET_FAILURE,
  CLEAR_JOBS_LIST,
} from '../types';

const initialState = {
  loading: null,
  jobs: [],
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
        jobs: [...state.jobs, ...action.payload],
        loading: false,
        page: action.payload.length >= 50 ? state.page + 1 : state.page,
      };

    case JOBSLIST_GET_FAILURE:
      return {
        ...state,
        jobs: [],
        loading: false,
      };
    case CLEAR_JOBS_LIST:
      return {
        ...state,
        jobs: [],
        page: 1,
      };
    default:
      return state;
  }
};

export default jobsList;
