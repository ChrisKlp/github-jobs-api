import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../data/actions/theme.action';

const useTheme = () => {
  const dispatch = useDispatch();
  const themeSwitch = useCallback(() => dispatch(toggleTheme()), [dispatch]);
  const { darkThemeEnabled } = useSelector(store => store.theme);
  const mediaThemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

  useEffect(() => {
    if (darkThemeEnabled !== mediaThemeQuery.matches) {
      themeSwitch();
    }
    mediaThemeQuery.addEventListener('change', themeSwitch);
    return () => {
      mediaThemeQuery.removeEventListener('change', themeSwitch);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeSwitch]);

  return darkThemeEnabled;
};

export default useTheme;
