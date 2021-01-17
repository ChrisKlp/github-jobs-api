import Button from '../../components/Button/Button';
import styled from 'styled-components';
import Container from '../../components/Helpers/Container';

export const StyledContainer = styled(Container)`
  margin-top: -4rem;
  padding-bottom: 6.2rem;
`;

export const MoreButton = styled(Button)`
  display: block;
  margin: 0 auto;
`;

export const LoaderWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
`;

export const Info = styled.p`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colorPrimary};
  font-weight: 700;
`;
