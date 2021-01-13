import styled from 'styled-components';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import { sharedWrapper } from '../../theme/GlobalStyle';

const Wrapper = styled.footer`
  padding: 2.5rem 2.4rem 2.3rem;
  background: ${({ theme }) => theme.colorCardBg};
  border-radius: 0.6rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 2.3rem 0 2.2rem;
  }
`;

const InnerWrapper = styled.div`
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    ${sharedWrapper}
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 73rem;
  }
`;

const Container = styled.div`
  display: none;

  p {
    line-height: 1.6rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    display: block;
  }
`;

const StyledHeading = styled(Heading)`
  margin-bottom: 1.2rem;
`;

const ApplyButton = styled(Button)`
  flex-shrink: 0;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    width: 14.1rem;
  }
`;

const JobFooter = ({ data }) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <Container>
          <StyledHeading as="h3" h3>
            {data.title}
          </StyledHeading>
          <p>{data.company}</p>
        </Container>
        <ApplyButton>Apply Now</ApplyButton>
      </InnerWrapper>
    </Wrapper>
  );
};

export default JobFooter;
