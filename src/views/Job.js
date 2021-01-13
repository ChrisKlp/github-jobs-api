import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import JobDescription from '../components/JobDetails/JobDetails';
import JobFooter from '../components/JobFooter/JobFooter';
import JobIntro from '../components/JobIntro/JobIntro';
import Loader from '../components/Loader/Loader';
import { fetchSingleJob } from '../data/actions/job.action';
import { sharedWrapper } from '../theme/GlobalStyle';

const Main = styled.main`
  ${sharedWrapper}
  margin-top: -1.5rem;
  max-width: 73rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-top: -4rem;
  }
`;

const LoaderWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;

const Job = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleJob(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { content: data, loading } = useSelector(store => store.job);

  return (
    <>
      {loading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <>
          <Main>
            <JobIntro data={data} />
            <JobDescription data={data} />
          </Main>
          <JobFooter data={data} />
        </>
      )}
    </>
  );
};

export default Job;
