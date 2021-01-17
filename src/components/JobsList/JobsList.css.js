import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 5.7rem auto 3.2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(33rem, 1fr));
  gap: 4.9rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    gap: 6.5rem 1.1rem;
    margin: 7rem auto 5.6rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    margin: 10.5rem auto 5.6rem;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    gap: 6.5rem 3rem;
  }
`;
