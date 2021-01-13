import styled, { css } from 'styled-components';

const Heading = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colorHeading};

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    font-size: 2.8rem;
    line-height: 3.4rem;
  }

  ${({ h2 }) =>
    h2 &&
    css`
      @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
        font-size: 2.4rem;
        line-height: 2.8rem;
      }
    `};

  ${({ h3 }) =>
    h3 &&
    css`
      @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
        font-size: 2rem;
        line-height: 2.4rem;
      }
    `};
`;

export default Heading;
