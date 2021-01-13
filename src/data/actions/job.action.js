import axios from 'axios';

import { JOB_GET_REQUEST, JOB_GET_SUCCESS, JOB_GET_FAILURE } from '../types';

export const fetchSingleJob = id => async dispatch => {
  dispatch({
    type: JOB_GET_REQUEST,
  });

  try {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`
    );
    const { data } = response;

    dispatch({
      type: JOB_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOB_GET_FAILURE,
    });
  }
};
