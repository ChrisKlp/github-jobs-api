import styled from 'styled-components';
import { rgba } from 'polished';

const Input = styled.input`
  padding: 0.8rem;
  width: 100%;
  font-family: inherit;
  font-size: 1.6rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colorHeading};
  background: transparent;
  border: 0;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => rgba(theme.colorHeading, 0.5)};
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: ${({ theme }) => theme.colorHeading};
    box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colorCardBg} inset;
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colorCardBg} inset;
  }
`;

export default Input;
