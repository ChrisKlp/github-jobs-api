import styled from 'styled-components';
import Container from '../../components/Helpers/Container';

export const StyledContainer = styled(Container)`
  margin-top: -1.5rem;
  max-width: 73rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-top: -4rem;
  }
`;

export const LoaderWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;
