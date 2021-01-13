import styled from 'styled-components';
import { sharedWrapper } from '../../theme/GlobalStyle';
import logo from '../../assets/desktop/logo.svg';
import bgMobile from '../../assets/mobile/bg-pattern-header.svg';
import bgTablet from '../../assets/tablet/bg-pattern-header.svg';
import bgDesktop from '../../assets/desktop/bg-pattern-header.svg';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';

const Wrapper = styled.header`
  height: 13.6rem;
  background-color: ${({ theme }) => theme.colorPrimary};
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    height: 16rem;
    background-image: url(${bgTablet});
    border-radius: 0 0 0 10rem;
  }

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    background-image: url(${bgDesktop});
    height: 16.2rem;
  }
`;

const InnerWrapper = styled.div`
  ${sharedWrapper}

  padding-top: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    padding-top: 4.2rem;
  }
`;

const Logo = styled.img`
  display: block;
  width: 11.5rem;
`;

const Header = () => {
  return (
    <Wrapper>
      <InnerWrapper>
        <a href="/">
          <Logo src={logo} alt="devjobs logo" />
        </a>
        <ThemeSwitch />
      </InnerWrapper>
    </Wrapper>
  );
};

export default Header;
