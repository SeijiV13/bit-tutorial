import React from 'react';
import { render } from '@testing-library/react';
import { BasicHackButton } from './hack-button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicHackButton />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
