import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Helpers/Loader';
import CompanyInfo from '../../components/JobDetails/CompanyInfo/CompanyInfo';
import JobDescription from '../../components/JobDetails/JobDetails';
import JobFooter from '../../components/JobDetails/JobFooter/JobFooter';
import { fetchSingleJob } from '../../data/actions/job.action';
import { LoaderWrapper, StyledContainer } from './Job.css';

const Job = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSingleJob(id));
  }, [dispatch, id]);

  const { content: data, loading } = useSelector(store => store.job);

  return (
    <>
      {loading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <>
          <StyledContainer>
            <CompanyInfo data={data} />
            <JobDescription data={data} />
          </StyledContainer>
          <JobFooter data={data} />
        </>
      )}
    </>
  );
};

export default Job;
