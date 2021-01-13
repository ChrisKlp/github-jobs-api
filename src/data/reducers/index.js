import { combineReducers } from 'redux';
import jobsList from './jobsList.reducer';
import job from './job.reducer';
import theme from './theme.reducer';

const rootReducer = combineReducers({
  jobsList,
  job,
  theme,
});

export default rootReducer;
