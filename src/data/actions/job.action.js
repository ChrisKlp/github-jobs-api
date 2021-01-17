import { getJob} from '../api';

import { JOB_GET_REQUEST, JOB_GET_SUCCESS, JOB_GET_FAILURE } from '../types';

export const fetchSingleJob = id => async dispatch => {
  dispatch({
    type: JOB_GET_REQUEST,
  });

  try {
    const response = await getJob(id)
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
