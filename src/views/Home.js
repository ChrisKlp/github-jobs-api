import Button from '../components/Button/Button';
import styled from 'styled-components';
import JobsFilters from '../components/JobsFilters/JobsFilters';
import JobsList from '../components/JobsList/JobsList';
import { sharedWrapper } from '../theme/GlobalStyle';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchJobs,
  loadMore,
  resetPage,
} from '../data/actions/jobsList.action';
import Loader from '../components/Loader/Loader';
import Heading from '../components/Heading/Heading';

const Main = styled.main`
  ${sharedWrapper}
  margin-top: -4rem;
  padding-bottom: 6.2rem;
`;

const MoreButton = styled(Button)`
  display: block;
  margin: 0 auto;
`;

const LoaderWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;

const Info = styled(Heading)`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const App = () => {
  const { loading, jobs } = useSelector(store => store.jobsList);
  const dispatch = useDispatch();

  const handleLoadMoreClick = () => {
    !jobs.length ? dispatch(resetPage()) : dispatch(loadMore());
    dispatch(fetchJobs());
  };

  useEffect(() => {
    dispatch(fetchJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Main>
      <JobsFilters />
      {loading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <>
          {!jobs.length && <Info>No more jobs...</Info>}
          <JobsList />
          <MoreButton onClick={handleLoadMoreClick}>
            {!jobs.length ? 'Load Again' : 'Load More'}
          </MoreButton>
        </>
      )}
    </Main>
  );
};

export default App;
