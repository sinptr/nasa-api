import React from 'react';
import styled from 'styled-components';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { LayoutProps } from './Layout.types';

const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.main};
  flex-grow: 1;
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
