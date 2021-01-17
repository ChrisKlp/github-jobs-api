import logo from '../../assets/desktop/logo.svg';
import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import { Wrapper, StyledContainer, Logo } from './Header.css';

const Header = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <a href="/">
          <Logo src={logo} alt="devjobs logo" />
        </a>
        <ThemeSwitch />
      </StyledContainer>
    </Wrapper>
  );
};

export default Header;
