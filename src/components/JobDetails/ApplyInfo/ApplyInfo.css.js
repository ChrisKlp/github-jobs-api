import styled from 'styled-components';
import bgImageM from '../../../assets/mobile/bg-pattern-detail-footer.svg';
import bgImageD from '../../../assets/desktop/bg-pattern-detail-footer.svg';
import Heading from '../../Heading/Heading';

export const Wrapper = styled.div`
  margin-bottom: 4rem;
  padding: 3.2rem;
  background-color: ${({ theme }) => theme.colorPrimary};
  background-image: url(${bgImageM});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: cover;
  border-radius: 0.6rem;

  p {
    color: hsl(0, 0%, 100%);
  }

  a {
    font-weight: 700;
    text-decoration-line: underline;
    color: hsl(0, 0%, 100%);
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-bottom: 4.8rem;
    padding: 4rem 4.8rem;
    background-image: url(${bgImageD});
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    margin-bottom: 7.2rem;
  }
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: 2.8rem;
  color: hsl(0, 0%, 100%);
`;

export const HowToApplyHtml = styled.div`
  overflow-wrap: break-word;
`;
