import { useEffect, useState } from 'react';
import Mobile from './JobsFiltersMobile';
import Tablet from './JobsFiltersTablet';
import JobsFiltersProvider from './context';

const JobsFilters = () => {
  const mediaQuery = window.matchMedia('(min-width: 768px)');

  const [isTablet, setIsTablet] = useState(mediaQuery.matches);

  useEffect(() => {
    const handler = () => setIsTablet(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => {
      mediaQuery.removeEventListener('change', handler);
    };
  }, [mediaQuery]);

  return (
    <JobsFiltersProvider>
      <div>{isTablet ? <Tablet /> : <Mobile />}</div>
    </JobsFiltersProvider>
  );
};

export default JobsFilters;
