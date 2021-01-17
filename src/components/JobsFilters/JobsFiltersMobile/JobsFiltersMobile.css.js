import styled from 'styled-components';
import iconSearchWhite from '../../../assets/desktop/icon-search-white.svg';
import iconFilter from '../../../assets/mobile/icon-filter.svg';
import { srOnly } from '../../../theme/GlobalStyle';

export const Form = styled.form`
  padding: 1.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background: ${({ theme }) => theme.colorCardBg};
  border-radius: 0.6rem;
`;

export const Group = styled.div`
  flex-grow: 1;
  position: relative;
`;

export const SearchButton = styled.button`
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

export const FilterButton = styled(SearchButton)`
  background-color: transparent;
  background-image: url(${iconFilter});
  background-size: unset;
`;

export const Label = styled.label`
  ${srOnly}
`;
