import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
  };
  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;
