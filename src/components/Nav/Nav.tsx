import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { $isOpen } from '../../effector/nav/state';
import { media } from '../../constants';
import { NavItem } from './NavItem';
import { NavItemGroup } from './NavItemGroup';
import { NavList } from './NavList';

const NavContainer = styled.nav<{ open?: boolean }>`
  position: absolute;
  height: 100%;
  z-index: 1;
  transition: transform 0.3s;
  transform: ${({ open }) => !open && 'translateX(-100%)'};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing(2, 0)};
  width: 256px;
  overflow: auto;

  @media screen and ${media.desktop} {
    position: static;
    transition: none;
  }
`;

export function Nav() {
  const open = useStore($isOpen);

  return (
    <NavContainer open={open}>
      <NavList>
        <NavItem to="/">Apod</NavItem>
        <NavItemGroup path="/mars" title="Mars Rover Photos">
          {/* TODO: добавить вывод списка, которые берется из АПИ */}
          <NavItem offset={2} to="/mars/apollo">
            Apollo
          </NavItem>
          <NavItem offset={2} to="/mars/curiosity">
            Curiosity
          </NavItem>
        </NavItemGroup>
      </NavList>
    </NavContainer>
  );
}
