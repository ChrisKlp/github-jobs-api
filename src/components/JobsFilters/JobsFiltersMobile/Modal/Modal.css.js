import styled from 'styled-components';
import { srOnly } from '../../../../theme/GlobalStyle';
import Button from '../../../Button/Button';
import Container from '../../../Helpers/Container';
import Input from '../../Input/Input';


export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
`;

export const BgOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: hsla(0, 0%, 0%, 0.5);
  z-index: -1;
`;

export const StyledContainer = styled(Container)`
  margin-top: 22.5rem;
  padding: 2.4rem;
  background: ${({ theme }) => theme.colorCardBg};
  border-radius: 0.6rem;
`;

export const Group = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Label = styled.label`
  ${srOnly}
`;

export const ModalInput = styled(Input)`
  padding: 0.4rem 0.8rem;
`;

export const SearchButton = styled(Button)`
  margin-top: 2.2rem;
  width: 100%;
`;

export const Divider = styled.div`
  margin: 2.4rem -2.4rem;
  height: 0.1rem;
  background: ${({ theme }) => theme.colorText};
  opacity: 0.2;
`;
