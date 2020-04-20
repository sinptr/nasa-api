import React, { useRef } from 'react';
import { Transition } from 'react-transition-group';
import styled from 'styled-components';
import { CollapseProps, CollapseNode } from './Collapse.types';

const Container = styled(({ state, duration, ...rest }) => <div {...rest} />)`
  overflow: hidden;
  transition: ${({ duration }) => `max-height ${duration}ms ease-in-out`};
  height: ${({ state }) => state === 'exited' && 0};
`;

const Wrap = styled.div`
  overflow: hidden;
`;

export function Collapse({ children, in: inProp, duration = 300 }: CollapseProps) {
  const ref = useRef<HTMLDivElement>(null);

  /* eslint-disable no-param-reassign */
  /* eslint-disable no-unused-expressions */
  const onEnter = (node: CollapseNode) => {
    node.style.maxHeight = '0';
    // reflow
    node.scrollTop;
  };

  const onEntering = (node: CollapseNode) => {
    node.style.maxHeight = `${ref.current?.clientHeight}px`;
  };

  const onEntered = (node: CollapseNode) => {
    // @ts-ignore
    node.style.maxHeight = null;
  };

  const onExit = (node: CollapseNode) => {
    node.style.maxHeight = `${ref.current?.clientHeight}px`;
    // reflow
    node.scrollTop;
  };

  const onExiting = (node: CollapseNode) => {
    node.style.maxHeight = '0';
  };

  const onExited = (node: CollapseNode) => {
    // @ts-ignore
    node.style.maxHeight = null;
  };
  /* eslint-enable no-param-reassign */
  /* eslint-enable no-unused-expressions */

  return (
    <Transition
      in={inProp}
      timeout={duration}
      unmountOnExit
      mountOnEnter
      onExit={onExit}
      onExiting={onExiting}
      onExited={onExited}
      onEnter={onEnter}
      onEntering={onEntering}
      onEntered={onEntered}
    >
      {state => (
        <Container state={state} duration={duration}>
          <Wrap ref={ref}>{children}</Wrap>
        </Container>
      )}
    </Transition>
  );
}
