import styled from 'styled-components';
import { srOnly } from '../../../theme/GlobalStyle';
import Button from '../../Button/Button';

export const Form = styled.form`
  padding: 1.6rem;
  padding-left: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colorCardBg};
  border-radius: 0.6rem;
`;

export const Group = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:nth-of-type(1) {
    flex-grow: 1;
  }

  &:nth-of-type(3) {
    max-width: 24.6rem;
  }

  &:nth-of-type(5) {
    gap: 0;
  }
`;

export const Label = styled.label`
  ${srOnly}
`;

export const Divider = styled.div`
  margin: -1.6rem 2rem;
  width: 0.1rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colorText};
  opacity: 0.2;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    margin: -1.6rem 3.2rem;
  }
`;

export const SubmitButton = styled(Button)`
  margin-left: 2rem;
  padding: 1.6rem 1.4rem;
  width: auto;

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    margin-left: 2.6rem;
    padding: 1.6rem 0;
    width: 12.3rem;
  }
`;
