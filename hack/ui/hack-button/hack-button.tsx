import React, { ReactNode } from 'react';
import {MyWelcome} from '@bit-demo-seij/my-workspace.ui.my-welcome';
export type HackButtonProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function HackButton({ children }: HackButtonProps) {
  return (
    <div>
      {children}
      <button>Test</button>
      <MyWelcome>Hello world!</MyWelcome>
    </div>
  );
}
