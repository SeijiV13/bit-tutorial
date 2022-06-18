import React, { ReactNode } from 'react';
import { HackButton } from '@experience/bit-demo-seij.hack.ui.hack-button';

export type HackSearchProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function HackSearch({ children }: HackSearchProps) {
  return (
    <div>
      {children}
      <HackButton>test</HackButton>
    </div>
  );
}
