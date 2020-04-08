import React from 'react';
import styled from 'styled-components';
import { useStore } from 'effector-react';
import { Menu } from '../../../ui/icons';
import { toggleNav } from '../../../effector/nav';
import { $isOpen } from '../../../effector/nav/state';
import { Close } from '../../../ui/icons/svg/Close';
import { NasaFavicon } from '../../../ui/images';
import { $isMobile } from '../../../effector/device/state';

const HeaderStyled = styled.header`
  grid-area: header;
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  box-sizing: border-box;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(0.5, 0)};
`;

const Title = styled.span`
  margin-left: ${({ theme }) => theme.spacing(2)};
`;

const IconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  padding: 0;
  border: none;
  height: max-content;
  margin-left: ${({ theme }) => theme.spacing(2)};
`;

const Logo = styled.img`
  width: 40px;
  margin-left: ${({ theme }) => theme.spacing(2)};
`;

export function Header() {
  const isOpen = useStore($isOpen);
  const isMobile = useStore($isMobile);

  return (
    <HeaderStyled>
      {isMobile && <IconButton onClick={toggleNav}>{isOpen ? <Close /> : <Menu />}</IconButton>}
      <Logo src={NasaFavicon} alt="NASA" />
      <Title>NASA API Explorer</Title>
    </HeaderStyled>
  );
}
