import React from 'react';
import styled, { keyframes } from 'styled-components';

const Circle = styled.circle.attrs(() => ({
  cx: 25,
  cy: 25,
  r: 20,
  fill: 'none',
  strokeWidth: 2,
}))``;

const rotate = keyframes`
    100% {
      transform: rotate(360deg);
    }
`;

const dash = keyframes`
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
`;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled(({ className }) => (
  <SpinnerContainer>
    <svg className={className}>
      <Circle />
    </svg>
  </SpinnerContainer>
))`
  animation: ${rotate} 1s linear infinite;
  width: 50px;
  height: 50px;

  & ${Circle} {
    stroke: ${({ theme }) => theme.colors.primary};
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;
