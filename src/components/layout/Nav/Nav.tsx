import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { $isOpen } from '../../../effector/nav/state';
import { media } from '../../../constants';

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

const NavItemStyled = styled(NavLink)<NavLinkProps>`
  display: block;
  text-decoration: none;
  color: inherit;
  padding: ${({ theme }) => theme.spacing(1, 2)};
  transition: background-color, color 0.1s ease-in;
  cursor: pointer;

  &.active {
    text-decoration: underline;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

function NavItem(props: Omit<NavLinkProps, 'exact'>) {
  return <NavItemStyled exact {...props} />;
}

export function Nav() {
  const open = useStore($isOpen);

  return (
    <NavContainer open={open}>
      <NavList>
        <NavItem to="/">Apod</NavItem>
        <NavItem to="/mars">Mars Rover Photos</NavItem>
      </NavList>
    </NavContainer>
  );
}
