import styled, { css } from 'styled-components';
import iconSun from '../../../assets/desktop/icon-sun.svg';
import iconMoon from '../../../assets/desktop/icon-moon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../data/actions/theme.action';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const Icon = styled.img`
  display: block;
`;

const SwitchButton = styled.button`
  position: relative;
  width: 4.8rem;
  height: 2.4rem;
  background: hsl(0, 0%, 100%);
  border-radius: 1.2rem;
  outline: none;
  border: none;
  cursor: pointer;

  &::after {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    width: 1.4rem;
    height: 1.4rem;
    background-color: ${({ theme }) => theme.colorPrimary};
    border-radius: 50%;
    transition: transform 0.2s, background-color 0.2s;
    content: '';
  }

  &:hover {
    &::after {
      background-color: ${({ theme }) => theme.colorPrimaryAlt};
    }
  }

  ${({ themeDark }) =>
    themeDark &&
    css`
      &::after {
        transform: translateX(2.4rem);
      }
    `};
`;

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const { darkThemeEnabled } = useSelector(store => store.theme);

  const handleChangeThemeClick = () => dispatch(toggleTheme());

  return (
    <Wrapper>
      <Icon src={iconSun} alt="Sun Icon" />
      <SwitchButton
        themeDark={darkThemeEnabled}
        onClick={handleChangeThemeClick}
        aria-label="Theme Switch Button"
      />
      <Icon src={iconMoon} alt="Moon Icon" />
    </Wrapper>
  );
};

export default ThemeSwitch;
