import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  padding: ${({ theme }) => theme.spacing(2)};
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primaryText};
  box-sizing: border-box;
`;

export function Header() {
  return (
    <HeaderStyled>
      <span>NASA API Viewer</span>
    </HeaderStyled>
  );
}
