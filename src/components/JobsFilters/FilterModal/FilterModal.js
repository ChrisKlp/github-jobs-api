import styled from 'styled-components';
import { sharedWrapper, srOnly } from '../../../theme/GlobalStyle';
import Button from '../../Button/Button';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import iconLocation from '../../../assets/desktop/icon-location.svg';
import { JobsFiltersContext } from '../context';
import { useContext } from 'react';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
`;

const BgOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: hsla(0, 0%, 0%, 0.5);
  z-index: -1;
`;

const InnerWrapper = styled.div`
  ${sharedWrapper}

  margin-top: 22.5rem;
  padding: 2.4rem;
  background: ${({ theme }) => theme.colorCardBg};
  border-radius: 0.6rem;
`;

const Group = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const Label = styled.label`
  ${srOnly}
`;

const ModalInput = styled(Input)`
  padding: 0.4rem 0.8rem;
`;

const SearchButton = styled(Button)`
  margin-top: 2.2rem;
  width: 100%;
`;

const Divider = styled.div`
  margin: 2.4rem -2.4rem;
  height: 0.1rem;
  background: ${({ theme }) => theme.colorText};
  opacity: 0.2;
`;

const FilterModal = () => {
  const { openFiltersModal, location, handleLocationChange } = useContext(
    JobsFiltersContext
  );

  return (
    <Wrapper>
      <BgOverlay onClick={openFiltersModal} />
      <InnerWrapper>
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
        <SearchButton type="submit">Search</SearchButton>
      </InnerWrapper>
    </Wrapper>
  );
};

export default FilterModal;
