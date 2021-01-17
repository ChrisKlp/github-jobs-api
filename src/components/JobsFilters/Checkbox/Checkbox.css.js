import styled, { css } from 'styled-components';
import { srOnly } from '../../../theme/GlobalStyle';
import { rgba } from 'polished';
import iconCheck from '../../../assets/desktop/icon-check.svg';

export const Wrapper = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 1.6rem;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  ${srOnly}
`;

export const StyledCheckbox = styled.span`
  display: block;
  flex-shrink: 0;
  width: 2.4rem;
  height: 2.4rem;
  background-color: ${({ theme }) => rgba(theme.colorHeading, 0.1)};
  border-radius: 0.3rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => rgba(theme.colorPrimary, 0.25)};
  }

  ${({ checked }) =>
    checked &&
    css`
      background-color: ${({ theme }) => theme.colorPrimary};
      background-image: url(${iconCheck});
      background-repeat: no-repeat;
      background-position: center center;

      &:hover {
        background-color: ${({ theme }) => theme.colorPrimary};
      }
    `};
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 1.6rem;
  color: ${({ theme }) => theme.colorHeading};

  span {
    display: none;

    @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
      display: inline-block;
    }
  }
`;
