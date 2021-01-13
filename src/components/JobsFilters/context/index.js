import { createContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchJobs, resetPage, setFilters } from '../../../data/actions/jobsList.action';

export const JobsFiltersContext = createContext();

const JobsFiltersProvider = ({ children }) => {
  const dispatch = useDispatch();

  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [fullTime, setFullTime] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDescriptionChange = e => setDescription(e.target.value);
  const handleLocationChange = e => setLocation(e.target.value);
  const handleFullTimeChange = () => setFullTime(prev => !prev);

  const openFiltersModal = () => setIsModalOpen(prev => !prev);

  const handleSubmit = e => {
    e.preventDefault();
    const full_time = fullTime ? 'on' : null
    dispatch(resetPage())
    dispatch(setFilters(description, location, full_time));
    dispatch(fetchJobs());
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
  };

  return (
    <JobsFiltersContext.Provider value={contextValue}>
      {children}
    </JobsFiltersContext.Provider>
  );
};

export default JobsFiltersProvider;
