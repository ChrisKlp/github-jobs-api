import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const Content = styled.div`
  padding: 4.9rem 0.9rem 3.2rem 3.2rem;
  height: 100%;
  background: ${({ theme }) => theme.colorCardBg};
  border-radius: 0.6rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 4.9rem 2.1rem 3.2rem 3.2rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    padding: 4.9rem 3.2rem 3.2rem;
  }
`;

export const Logo = styled.div`
  position: absolute;
  padding: 0.6rem;
  top: -2.5rem;
  left: 3.2rem;
  display: grid;
  place-items: center;
  width: 50px;
  height: 50px;
  background: hsl(0, 0%, 100%);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 0.3rem 0.4rem -0.4rem ${({ theme }) => theme.colorText};

  img {
    display: block;
    width: 100%;
  }
`;

export const Time = styled.div`
  display: flex;
  align-items: baseline;

  p {
    line-height: 1.6rem;
  }
`;

export const Spacer = styled.div`
  margin: 0 1.2rem;
  width: 0.4rem;
  height: 0.4rem;
  background: ${({ theme }) => theme.colorText};
  border-radius: 50%;
`;

export const Title = styled.a`
  display: block;
  margin: 1.6rem 0 1.7rem;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.colorHeading};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colorText};
  }
`;

export const CompanyName = styled.p`
  margin-bottom: 2.6rem;
  line-height: 2rem;
`;

export const Locations = styled.p`
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 1.8rem;
  color: ${({ theme }) => theme.colorPrimary};
`;
