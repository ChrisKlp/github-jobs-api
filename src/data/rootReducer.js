import { combineReducers } from 'redux';
import jobsList from './reducers/jobsList.reducer';
import job from './reducers/job.reducer';
import filter from './reducers/filterReducer';
import theme from './reducers/theme.reducer';

const rootReducer = combineReducers({
  jobsList,
  job,
  filter,
  theme,
});

export default rootReducer;
