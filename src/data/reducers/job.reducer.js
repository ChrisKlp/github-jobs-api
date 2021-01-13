import {
  JOB_GET_REQUEST,
  JOB_GET_SUCCESS,
  JOB_GET_FAILURE,
} from '../types';

const initialState = {
  loading: null,
  content: {},
};

const job = (state = initialState, action) => {

  switch (action.type) {
    case JOB_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case JOB_GET_SUCCESS:
      return {
        ...state,
        content: action.payload,
        loading: false,
      };

    case JOB_GET_FAILURE:
      return {
        ...state,
        content: {},
        loading: false,
      };

    default:
      return state;
  }
};

export default job;
