import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import styled from 'styled-components';
import { fetchApod } from '../../effector/apod';
import { $apod } from '../../effector/apod/state';

const Container = styled.div`
  position: relative;
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

export function Card() {
  const data = useStore($apod);

  useEffect(() => {
    fetchApod();
  }, []);

  return (
    <Container>
      <Title>{data.title}</Title>
      <Img alt={data.title} src={data.url} />
      <Description>{data.explanation}</Description>
    </Container>
  );
}
