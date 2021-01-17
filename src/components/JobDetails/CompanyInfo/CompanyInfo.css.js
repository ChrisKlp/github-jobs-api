import styled from 'styled-components';
import Heading from '../../Heading/Heading';

export const Wrapper = styled.div`
  position: relative;
  margin-bottom: 2.4rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-bottom: 3.2rem;
  }
`;

export const Content = styled.div`
  padding: 4.9rem 2.4rem 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colorCardBg};
  border-radius: 0.6rem;
  text-align: center;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding: 0 4rem 0 18rem;
    height: 14rem;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

export const Logo = styled.div`
  padding: 1rem;
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  place-items: center;
  width: 5rem;
  height: 5rem;
  background: hsl(0, 0%, 100%);
  border-radius: 1.5rem;
  overflow: hidden;

  img {
    display: block;
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    top: 0;
    left: 0;
    transform: translateX(0);
    width: 14rem;
    height: 14rem;
    border-radius: 0 0 0 0.6rem;
  }
`;

export const CompanyName = styled(Heading)`
  margin-bottom: 1.3rem;
`;

export const CompanyUrl = styled.p`
  margin-bottom: 2.7rem;
  line-height: 1.6rem;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    margin-bottom: 0;
  }
`;
