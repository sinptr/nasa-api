import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { theme, GlobalStyle } from '../../ui';
import { Layout } from '../layout';
import { Apod } from '../apod';
import '../../effector/init';

function Component() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Layout>
        <Apod />
      </Layout>
    </ThemeProvider>
  );
}

export const App = hot(Component);
