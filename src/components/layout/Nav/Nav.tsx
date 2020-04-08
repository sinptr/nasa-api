import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { $isOpen } from '../../../effector/nav/state';

const NavContainer = styled.nav<{ opened?: boolean }>`
  position: absolute;
  height: 100%;
  z-index: 1;
  transition: transform 0.3s;
  transform: ${({ opened }) => !opened && 'translateX(-100%)'};
  background-color: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing(2)};
  width: 256px;

  @media (min-width: 1024px) {
    position: static;
    transition: none;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`;

export function Nav() {
  const opened = useStore($isOpen);

  return (
    <NavContainer opened={opened}>
      <NavList>
        <NavItem>Apod</NavItem>
        <NavItem>Mars Rover Photos</NavItem>
      </NavList>
    </NavContainer>
  );
}
