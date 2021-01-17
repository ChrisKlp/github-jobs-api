import Input from '../Input/Input';
import iconSearch from '../../../assets/desktop/icon-search.svg';
import iconLocation from '../../../assets/desktop/icon-location.svg';
import Checkbox from '../Checkbox/Checkbox';
import { useContext } from 'react';
import {
  Form,
  Group,
  Label,
  Divider,
  SubmitButton,
} from './JobsFiltersTablet.css';
import { FiltersContext } from '../JobsFilters';

const JobsFiltersTablet = () => {
  const {
    description,
    location,
    handleDescriptionChange,
    handleLocationChange,
    handleSubmit,
    isSubmitting,
  } = useContext(FiltersContext);

  return (
    <Form onSubmit={handleSubmit}>
      <Group>
        <img src={iconSearch} alt="Search icon" />
        <Label htmlFor="filter-by-title">Filter by title</Label>
        <Input
          type="text"
          id="filter-by-title"
          placeholder="Filter by title, companies, expertise…"
          value={description}
          onChange={handleDescriptionChange}
        />
      </Group>
      <Divider />
      <Group>
        <img src={iconLocation} alt="Search icon" />
        <Label htmlFor="filter-by-location">Filter by location</Label>
        <Input
          type="text"
          id="filter-by-location"
          placeholder="Filter by location..."
          value={location}
          onChange={handleLocationChange}
        />
      </Group>
      <Divider />
      <Group>
        <Checkbox>
          Full Time <span>Only</span>
        </Checkbox>
        <SubmitButton disabled={isSubmitting} type="submit">
          Search
        </SubmitButton>
      </Group>
    </Form>
  );
};

export default JobsFiltersTablet;
