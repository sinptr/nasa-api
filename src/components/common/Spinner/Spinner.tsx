import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SpinnerProps } from './Spinner.types';

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

export const Spinner = styled<React.FC<SpinnerProps>>(({ size, ...rest }) => (
  <svg {...rest}>
    <Circle />
  </svg>
))`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: ${rotate} 1s linear infinite;
  width: ${({ size = 50 }) => `${size}px`};
  height: ${({ size = 50 }) => `${size}px`};

  & ${Circle} {
    stroke: ${({ theme }) => theme.colors.primary};
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;
