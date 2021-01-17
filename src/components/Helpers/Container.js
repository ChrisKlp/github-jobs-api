import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 111rem;
  width: 87.2%;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    width: 90%;
  }
`;

const Container = ({ className, children }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export default Container;
