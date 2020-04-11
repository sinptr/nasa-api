import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { $isOpen } from '../../../effector/nav/state';
import { media } from '../../../constants';

const NavContainer = styled.nav<{ open?: boolean }>`
  position: absolute;
  height: 100%;
  z-index: 1;
  transition: transform 0.3s;
  transform: ${({ open }) => !open && 'translateX(-100%)'};
  background-color: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing(2)};
  width: 256px;

  // если просто написать @media ${media.desktop}, 
  // то IDE кидает ошибку, т.к. парсер не воспринимает такое
  @media screen and ${media.desktop} {
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
  const open = useStore($isOpen);

  return (
    <NavContainer open={open}>
      <NavList>
        <NavItem>Apod</NavItem>
        <NavItem>Mars Rover Photos</NavItem>
      </NavList>
    </NavContainer>
  );
}
