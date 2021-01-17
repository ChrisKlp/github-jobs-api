import JobsFilters from '../../components/JobsFilters/JobsFilters';
import JobsList from '../../components/JobsList/JobsList';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback} from 'react';
import Loader from '../../components/Helpers/Loader';
import { StyledContainer, LoaderWrapper, MoreButton, Info } from './Home.css';
import { jobsSelector } from '../../data/selectors';
import { showMoreJobs } from '../../data/actions/filter.action';

const App = () => {
  const { loading, jobs} = useSelector(store => store.jobsList);
  const { count} = useSelector(store => store.filter);
  const jobsList = useSelector(jobsSelector);

  const dispatch = useDispatch();
  const showMore = useCallback(() => dispatch(showMoreJobs()), [dispatch]);

  return (
    <main>
      <StyledContainer>
        <JobsFilters />
        {!jobs.length && loading ? (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        ) : (
          <>
            <JobsList jobs={jobsList} />
            {count >= jobs.length ? (
              <Info>No more Jobs</Info>
            ) : (
              <MoreButton onClick={showMore}>Load More</MoreButton>
            )}
          </>
        )}
      </StyledContainer>
    </main>
  );
};

export default App;
