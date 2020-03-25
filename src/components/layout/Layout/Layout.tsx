import React from 'react';
import styled from 'styled-components';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { LayoutProps } from './Layout.types';

const Main = styled.main`
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.main};
  height: 100%;
`;

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
}
