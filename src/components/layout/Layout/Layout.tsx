import React from 'react';
import styled from 'styled-components';
import { Header } from '../Header';
import { LayoutProps } from './Layout.types';
import { Nav } from '../Nav';
import { closeNav } from '../../../effector/nav';

const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.main};
  overflow: auto;
  flex: 1;
  position: relative;
`;

const Main = styled.main`
  display: flex;
  flex: 1;
  overflow: auto;
`;

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Main>
        <Nav />
        <Section onClick={closeNav}>{children}</Section>
      </Main>
    </>
  );
}
