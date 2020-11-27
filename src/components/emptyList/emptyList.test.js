import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import EmptyList from './index';

test('Gnome card has name, age and hair', () => {
  const { container } = render(<EmptyList />);

  expect(getByTestId(container, 'emptyListImage')).toBeInTheDocument();
  expect(getByTestId(container, 'emptyListText')).toBeInTheDocument();
  expect(getByTestId(container, 'emptyListSecondaryText')).toBeInTheDocument();
});
