import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    height: 100%;
  }
  * {
    box-sizing: inherit;
  }
  body {
    height: 100%;
  };
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`;
