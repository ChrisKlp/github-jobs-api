import { SET_FILTERS, SHOW_MORE_JOBS } from '../types';

export const setFilters = (description, location, full_time) => ({
  type: SET_FILTERS,
  payload: {
    description,
    location,
    full_time,
  },
});

export const showMoreJobs = () => ({
  type: SHOW_MORE_JOBS,
})
