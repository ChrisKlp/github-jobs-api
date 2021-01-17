import { getJobs } from '../api';

import {
  JOBSLIST_GET_REQUEST,
  JOBSLIST_GET_SUCCESS,
  JOBSLIST_GET_FAILURE,
  CLEAR_JOBS_LIST,
} from '../types';

export const fetchJobs = () => async (dispatch, getState) => {
  const { page } = getState().jobsList;
  const { description, location, full_time } = getState().filter.filters;

  dispatch({
    type: JOBSLIST_GET_REQUEST,
  });

  try {
    const response = await getJobs(description, location, full_time, page);
    const { data } = response;

    dispatch({
      type: JOBSLIST_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOBSLIST_GET_FAILURE,
    });
  }
};

export const clearJobsList = () => ({
  type: CLEAR_JOBS_LIST,
});
