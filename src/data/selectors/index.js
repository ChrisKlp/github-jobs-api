import { createStore } from 'redux';
import { createSelector } from 'reselect';

const jobsListSelector = state => state.jobsList;
const filterSelector = state => state.filter;

export const jobsSelector = createSelector(
  [jobsListSelector, filterSelector],
  ({ jobs }, { count }) => {
    return jobs.slice(0, count);
  }
);
