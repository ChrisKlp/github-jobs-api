import Mobile from './JobsFiltersMobile/JobsFiltersMobile';
import Tablet from './JobsFiltersTablet/JobsFiltersTablet';
import useMedia from '../../hooks/useMedia';
import { createContext, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../data/actions/filter.action';
import { clearJobsList} from '../../data/actions/jobsList.action';

export const FiltersContext = createContext();

const JobsFilters = () => {
  const isTablet = useMedia();
  const dispatch = useDispatch();
  const setJobFilters = useCallback(
    (description, location, type) =>
      dispatch(setFilters(description, location, type)),
    [dispatch]
  );
  const clearJobs = useCallback(() => dispatch(clearJobsList()), [dispatch]);

  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [fullTime, setFullTime] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDescriptionChange = e => setDescription(e.target.value);
  const handleLocationChange = e => setLocation(e.target.value);
  const handleFullTimeChange = () => setFullTime(prev => !prev);

  const openFiltersModal = () => setIsModalOpen(prev => !prev);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true)
    const type = fullTime ? 'Full Time' : null;
    setJobFilters(description, location, type);
    clearJobs();
    setTimeout(() => {
      setIsSubmitting(false)
    }, 1000);
  };

  const contextValue = {
    description,
    location,
    fullTime,
    handleDescriptionChange,
    handleLocationChange,
    handleFullTimeChange,
    isModalOpen,
    openFiltersModal,
    handleSubmit,
    isSubmitting
  };

  return (
    <FiltersContext.Provider value={contextValue}>
      <div>{isTablet ? <Tablet /> : <Mobile />}</div>
    </FiltersContext.Provider>
  );
};

export default JobsFilters;
