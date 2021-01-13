import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header/Header';
import { toggleTheme } from '../data/actions/theme.action';
import GlobalStyle from '../theme/GlobalStyle';
import { lightTheme, darkTheme } from '../theme/themes';

const MainTemplate = ({ children }) => {
  const dispatch = useDispatch();
  const { darkThemeEnabled } = useSelector(store => store.theme);
  const mediaThemeQuery = window.matchMedia('(prefers-color-scheme: dark)')

  useEffect(() => {
    if (darkThemeEnabled !== mediaThemeQuery.matches) {
      dispatch(toggleTheme());
    }
    const themeSwitch = () => dispatch(toggleTheme());
    mediaThemeQuery.addEventListener('change', themeSwitch);
    return () => {
      mediaThemeQuery.removeEventListener('change', themeSwitch);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default MainTemplate;
