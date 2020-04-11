import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import styled from 'styled-components';
import { fetchApod } from '../../effector/apod';
import { $apod } from '../../effector/apod/state';

const Container = styled.div`
  position: relative;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  padding: ${({ theme }) => theme.spacing(0, 2)};
`;

const Description = styled.p`
  padding: ${({ theme }) => theme.spacing(0, 2)};
`;

const Img = styled.img`
  max-width: 100%;
  margin: 0 auto;
`;

export function Apod() {
  const { title, url, explanation } = useStore($apod);

  useEffect(() => {
    fetchApod();
  }, []);

  return (
    <Container>
      <Title>{title}</Title>
      <Img alt={title} src={url} />
      <Description>{explanation}</Description>
    </Container>
  );
}
