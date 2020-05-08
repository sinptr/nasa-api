import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';
import React from 'react';

type LinkProps = NavLinkProps & { offset?: number };
export type NavItemProps = Omit<LinkProps, 'exact'>;

const Link = styled(NavLink)<LinkProps>`
  display: block;
  text-decoration: none;
  color: inherit;
  padding: ${({ theme, offset }) => theme.spacing(1, (offset ?? 1) * 2)};
  cursor: pointer;

  &.active {
    text-decoration: underline;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export function NavItem(props: NavItemProps) {
  return (
    <li>
      <Link exact {...props} />
    </li>
  );
}
