import axios from 'axios';

import {
  JOBSLIST_GET_REQUEST,
  JOBSLIST_GET_SUCCESS,
  JOBSLIST_GET_FAILURE,
  SET_FILTERS,
  LOAD_MORE,
  RESET_PAGINATION,
} from '../types';

export const fetchJobs = () => async (dispatch, getState) => {
  const {
    filters: { description, location, full_time },
    page,
  } = getState().jobsList;

  dispatch({
    type: JOBSLIST_GET_REQUEST,
  });

  try {
    const response = await axios.get(
      'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json',
      {
        params: {
          description,
          location,
          full_time,
          page,
        },
      }
    );
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

export const setFilters = (description, location, full_time) => ({
  type: SET_FILTERS,
  payload: {
    description,
    location,
    full_time,
  },
});

export const loadMore = () => ({
  type: LOAD_MORE,
});

export const resetPage = () => ({
  type: RESET_PAGINATION,
});
