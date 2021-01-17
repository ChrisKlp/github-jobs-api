import styled from 'styled-components';
import Container from '../../Helpers/Container';
import Button from '../../Button/Button';
import Heading from '../../Heading/Heading';

export const Wrapper = styled.footer`
  padding: 2.5rem 2.4rem 2.3rem;
  background: ${({ theme }) => theme.colorCardBg};
  border-radius: 0.6rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 2.3rem 0 2.2rem;
  }
`;

export const StyledContainer = styled(Container)`
  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 73rem;
  }
`;

export const Content = styled.div`
  display: none;

  p {
    line-height: 1.6rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    display: block;
  }
`;

export const StyledHeading = styled(Heading)`
  margin-bottom: 1.2rem;
`;

export const ApplyButton = styled(Button)`
  flex-shrink: 0;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    width: 14.1rem;
  }
`;
