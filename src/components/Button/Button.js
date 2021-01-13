import styled, { css } from 'styled-components';
import { rgba } from 'polished';

const Button = styled.button`
  padding: 1.6rem 0;
  width: 14.1rem;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.6rem;
  text-align: center;
  color: hsl(0, 0%, 100%);
  background: ${({ theme }) => theme.colorPrimary};
  border-radius: 0.5rem;
  outline: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colorPrimaryAlt};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      display: block;
      flex-shrink: 0;
      background: ${({ theme }) => rgba(theme.colorButtonSecondary, 0.1)};
      color: ${({ theme }) => theme.colorButtonSecondary};

      &:hover {
        background: ${({ theme }) => rgba(theme.colorButtonSecondary, 0.35)};
      }
    `};
`;

export default Button;
