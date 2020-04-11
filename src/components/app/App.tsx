import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme, GlobalStyle } from '../../ui';
import { Layout } from '../layout';
import '../../effector/init';
import { Routes } from '../../pages';

function Component() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export const App = hot(Component);
