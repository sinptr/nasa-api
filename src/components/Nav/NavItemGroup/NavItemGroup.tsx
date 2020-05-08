import React, { useCallback, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import * as R from 'ramda';
import styled from 'styled-components';
import { Collapse } from '../../../ui/components/Collapse';
import { NavList } from '../NavList';

export type NavItemGroupProps = {
  children: React.ReactNode;
  title: string;
  path: string;
};

const Title = styled.div`
  color: inherit;
  font-weight: bold;
  padding: ${({ theme }) => theme.spacing(1, 2)};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export function NavItemGroup({ children, title, path }: NavItemGroupProps) {
  const match = useRouteMatch(path);
  const [isOpen, setIsOpen] = useState(() => !!match);

  const toggle = useCallback(() => {
    setIsOpen(R.not);
  }, []);

  return (
    <li>
      <Title onClick={toggle}>{title}</Title>
      <Collapse in={isOpen}>
        <NavList>{children}</NavList>
      </Collapse>
    </li>
  );
}
