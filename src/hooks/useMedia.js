import { useEffect, useState } from 'react';

const useMedia = () => {
  const mediaQuery = window.matchMedia('(min-width: 768px)');

  const [isTablet, setIsTablet] = useState(mediaQuery.matches);

  useEffect(() => {
    const handler = () => setIsTablet(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [mediaQuery]);

  return isTablet;
};

export default useMedia;
