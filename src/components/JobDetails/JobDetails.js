import JobApplyInfo from './ApplyInfo/ApplyInfo';
import JobHeader from './JobInfo/JobInfo';
import parse from 'html-react-parser';
import { useRef } from 'react';
import {
  Wrapper,
  HeaderWrapper,
  ApplyButton,
  Description,
} from './JobDetails.css';

const JobDetails = ({ data }) => {
  const applyInfoRef = useRef();
  const handleApplyClick = () =>
    applyInfoRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Wrapper>
        <HeaderWrapper>
          <JobHeader data={data} />
          <ApplyButton onClick={handleApplyClick}>Apply Now</ApplyButton>
        </HeaderWrapper>
        <Description>{data.description && parse(data.description)}</Description>
      </Wrapper>
      <JobApplyInfo applyInfoRef={applyInfoRef} data={data.how_to_apply} />
    </>
  );
};

export default JobDetails;
