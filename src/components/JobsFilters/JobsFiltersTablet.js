import styled from 'styled-components';
import { srOnly } from '../../theme/GlobalStyle';
import Input from './Input/Input';
import iconSearch from '../../assets/desktop/icon-search.svg';
import iconLocation from '../../assets/desktop/icon-location.svg';
import Checkbox from './Checkbox/Checkbox';
import Button from '../Button/Button';
import { useContext } from 'react';
import { JobsFiltersContext } from './context';

const Form = styled.form`
  padding: 1.6rem;
  padding-left: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colorCardBg};
  border-radius: 0.6rem;
`;

const Group = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:nth-of-type(1) {
    flex-grow: 1;
  }

  &:nth-of-type(3) {
    max-width: 24.6rem;
  }

  &:nth-of-type(5) {
    gap: 0;
  }
`;

const Label = styled.label`
  ${srOnly}
`;

const Divider = styled.div`
  margin: -1.6rem 2rem;
  width: 0.1rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colorText};
  opacity: 0.2;

  @media (min-width: ${({ theme }) => theme.mediaSize.lg}) {
    margin: -1.6rem 3.2rem;
  }
`;

const SubmitButton = styled(Button)`
  margin-left: 2rem;
  padding: 1.6rem 1.4rem;
  width: auto;

  @media (min-width: ${({ theme }) => theme.mediaSize.xlg}) {
    margin-left: 2.6rem;
    padding: 1.6rem 0;
    width: 12.3rem;
  }
`;

const JobsFiltersTablet = () => {
  const {
    description,
    location,
    handleDescriptionChange,
    handleLocationChange,
    handleSubmit
  } = useContext(JobsFiltersContext);

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
        <SubmitButton type="submit">Search</SubmitButton>
      </Group>
    </Form>
  );
};

export default JobsFiltersTablet;
