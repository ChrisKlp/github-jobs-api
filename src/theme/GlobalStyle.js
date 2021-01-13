import { createGlobalStyle, css } from 'styled-components';
import reset from 'styled-reset-advanced';
import './fonts.css';

export const sharedWrapper = css`
  max-width: 111rem;
  width: 87.2%;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.mediaSize.md}) {
    width: 90%;
  }
`;

export const srOnly = css`
  position: absolute;
  margin: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  clip-path: inset(50%);
`;

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
  }

  body {
    min-width: 28rem;
    font-family: 'Kumbh Sans', sans-serif;
    font-size: 1.6rem;
    /* background: ${({ theme }) => theme.colorHeading}; */
    background: ${({ theme }) => theme.colorBg};
  }

  p {
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.colorText};
  }
`;

export default GlobalStyle;
