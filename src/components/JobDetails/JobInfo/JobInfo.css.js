import styled from 'styled-components';
import Heading from '../../Heading/Heading';

export const Time = styled.div`
  display: flex;
  align-items: baseline;

  & > p {
    line-height: 1.6rem;
  }
`;

export const Spacer = styled.div`
  margin: 0 1.2rem;
  width: 0.4rem;
  height: 0.4rem;
  background: ${({ theme }) => theme.colorText};
  border-radius: 50%;
`;

export const Title = styled(Heading)`
  margin: 1.1rem 0 1.2rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin: 1.1rem 1rem 1.4rem 0;
  }
`;

export const Locations = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.colorPrimary};
`;
