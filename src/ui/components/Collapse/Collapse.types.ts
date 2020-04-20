import React from 'react';

export interface CollapseProps {
  children: React.ReactNode;
  in: boolean;
  duration?: number;
}

export type CollapseNode = HTMLElement;
