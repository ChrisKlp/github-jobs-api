import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header/Header';
import { fetchJobs } from '../data/actions/jobsList.action';
import useTheme from '../hooks/useTheme';
import GlobalStyle from '../theme/GlobalStyle';
import { darkTheme, lightTheme } from '../theme/themes';

const MainTemplate = ({ children }) => {
  const { page } = useSelector(store => store.jobsList);
  const { filters } = useSelector(store => store.filter);

  const darkThemeEnabled = useTheme();
  const dispatch = useDispatch();
  const getJobs = useCallback(() => dispatch(fetchJobs()), [dispatch]);

  useEffect(() => {
    getJobs();
  }, [getJobs, page, filters]);

  return (
    <ThemeProvider theme={darkThemeEnabled ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      {children}
    </ThemeProvider>
  );
};

export default MainTemplate;
