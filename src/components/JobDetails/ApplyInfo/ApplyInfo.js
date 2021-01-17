import parse from 'html-react-parser';
import { Wrapper, StyledHeading, HowToApplyHtml } from './ApplyInfo.css';

const JobApplyInfo = ({ data, applyInfoRef }) => {
  return (
    <Wrapper ref={applyInfoRef}>
      <StyledHeading as="h3" h3>
        How to Apply
      </StyledHeading>
      <HowToApplyHtml>{data && parse(data)}</HowToApplyHtml>
    </Wrapper>
  );
};

export default JobApplyInfo;
