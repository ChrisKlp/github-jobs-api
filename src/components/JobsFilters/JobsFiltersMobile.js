import { useContext } from 'react';
import styled from 'styled-components';
import iconSearchWhite from '../../assets/desktop/icon-search-white.svg';
import iconFilter from '../../assets/mobile/icon-filter.svg';
import { srOnly } from '../../theme/GlobalStyle';
import { JobsFiltersContext } from './context';
import FilterModal from './FilterModal/FilterModal';
import Input from './Input/Input';

const Form = styled.form`
  padding: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ theme }) => theme.colorCardBg};
  border-radius: 0.6rem;
`;

const Group = styled.div`
  flex-grow: 1;
  position: relative;
`;

const SearchButton = styled.button`
  display: block;
  width: 4.8rem;
  height: 4.8rem;
  background-color: ${({ theme }) => theme.colorPrimary};
  background-image: url(${iconSearchWhite});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const FilterButton = styled(SearchButton)`
  background-color: transparent;
  background-image: url(${iconFilter});
  background-size: unset;
`;

const Label = styled.label`
  ${srOnly}
`;

const JobsFilters = () => {
  const {
    description,
    handleDescriptionChange,
    isModalOpen,
    openFiltersModal,
    handleSubmit
  } = useContext(JobsFiltersContext);

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
      <SearchButton type="submit" />
      {isModalOpen && <FilterModal/>}
    </Form>
  );
};

export default JobsFilters;
