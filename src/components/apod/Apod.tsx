import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import styled from 'styled-components';
import { fetchApod } from '../../effector/apod';
import { $apod } from '../../effector/apod/state';
import { media } from '../../constants';

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

const Video = styled.iframe.attrs({
  allowFullScreen: true,
})`
  width: 100%;
  height: 300px;
  margin: 0 auto;
  border: none;

  @media screen and ${media.desktop} {
    height: 500px;
  }
`;

export function Apod() {
  const { title, url, explanation, mediaType } = useStore($apod);

  useEffect(() => {
    fetchApod();
  }, []);

  return (
    <Container>
      <Title>{title}</Title>
      {mediaType === 'image' && <Img alt={title} src={url} />}
      {mediaType === 'video' && <Video src={url} />}
      <Description>{explanation}</Description>
    </Container>
  );
}
