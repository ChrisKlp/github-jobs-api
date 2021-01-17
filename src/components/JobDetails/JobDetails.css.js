import styled from 'styled-components';
import Button from '../Button/Button';

export const Wrapper = styled.div`
  margin-bottom: 3.2rem;
  padding: 4rem 2.4rem 3.2rem;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colorCardBg};
  border-radius: 0.6rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 4.8rem;
  }
`;

export const HeaderWrapper = styled.div`
  margin-bottom: 3.2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-bottom: 4rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    margin-bottom: 4.4rem;
  }
`;

export const ApplyButton = styled(Button)`
  flex-shrink: 0;
  margin-top: 3.2rem;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-top: 0;
    width: 14.1rem;
  }
`;

export const Description = styled.div`
  h1,h2,h3,h4,h5,h6 {
    margin-bottom: 1em;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.colorHeading};
  }

  p {
    margin-bottom: 2em;
  }

  ul {
    list-style-type: disc;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.colorText};
    margin-block-start: 1em;
    margin-block-end: 2em;
    padding-inline-start: 1em;
  }

  ol {
    list-style-type: decimal;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.colorText};
    margin-block-start: 1em;
    margin-block-end: 2em;
    padding-inline-start: 1em;
  }

  li {
    padding-inline-start: 1em;

    &::marker {
      color: ${({ theme }) => theme.colorPrimary};
      font-weight: 700;
    }
  }

  strong {
    font-weight: 700;
    color: ${({ theme }) => theme.colorHeading};
  }

  a {
    color: ${({ theme }) => theme.colorPrimary};
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.6rem;
    text-decoration: underline;
  }
`;
