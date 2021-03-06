import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  padding: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondaryText};
  grid-area: footer;
`;

export function Footer() {
  return (
    <FooterStyled>
      <span>Powered by SP &copy;</span>
    </FooterStyled>
  );
}
