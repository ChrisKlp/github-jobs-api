import { useContext } from 'react';
import FilterModal from './Modal/Modal';
import Input from '../Input/Input';
import {Form, Group, Label, FilterButton, SearchButton} from './JobsFiltersMobile.css'
import { FiltersContext } from '../JobsFilters';

const JobsFiltersMobile = () => {
  const {
    description,
    handleDescriptionChange,
    isModalOpen,
    openFiltersModal,
    handleSubmit,
    isSubmitting
  } = useContext(FiltersContext);

  return (
    <Form onSubmit={handleSubmit}>
      <Group>
        <Label htmlFor="filter-by-title">Filter by title</Label>
        <Input
          type="text"
          id="filter-by-title"
          placeholder="Filter by title..."
          value={description}
          onChange={handleDescriptionChange}
        />
      </Group>
      <FilterButton type="button" onClick={openFiltersModal} />
      <SearchButton disabled={isSubmitting} type="submit" />
      {isModalOpen && <FilterModal/>}
    </Form>
  );
};

export default JobsFiltersMobile;
