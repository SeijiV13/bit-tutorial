import React from 'react';
import { render } from '@testing-library/react';
import { BasicHackSearch } from './hack-search.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicHackSearch />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
