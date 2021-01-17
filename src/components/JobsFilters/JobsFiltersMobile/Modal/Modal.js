import Checkbox from '../../Checkbox/Checkbox';
import iconLocation from '../../../../assets/desktop/icon-location.svg';
import { useContext } from 'react';
import {
  Wrapper,
  BgOverlay,
  StyledContainer,
  Group,
  Label,
  ModalInput,
  Divider,
  SearchButton,
} from './Modal.css';
import { FiltersContext } from '../../JobsFilters';

const FilterModal = () => {
  const {
    openFiltersModal,
    location,
    handleLocationChange,
    isSubmitting,
  } = useContext(FiltersContext);

  return (
    <Wrapper>
      <BgOverlay onClick={openFiltersModal} />
      <StyledContainer>
        <Group>
          <img src={iconLocation} alt="Icon Location" />
          <Label htmlFor="filter-by-location">Filter by location</Label>
          <ModalInput
            type="text"
            id="filter-by-location"
            placeholder="Filter by location…"
            value={location}
            onChange={handleLocationChange}
          />
        </Group>
        <Divider />
        <Checkbox>Full Time Only</Checkbox>
        <SearchButton disabled={isSubmitting} type="submit">
          Search
        </SearchButton>
      </StyledContainer>
    </Wrapper>
  );
};

export default FilterModal;
