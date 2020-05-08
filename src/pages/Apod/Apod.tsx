import React from 'react';
import styled from 'styled-components';
import { Apod } from '../../components/Apod';

const Title = styled.h1`
  padding: ${({ theme }) => theme.spacing(0, 2)};
`;

export function ApodPage() {
  return (
    <>
      <Title>APOD</Title>
      <Apod />
    </>
  );
}
