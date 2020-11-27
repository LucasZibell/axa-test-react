import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Paginator from './index';

test('paginator has next button', () => {
  const { container } = render(<Paginator />);

  expect(getByTestId(container, 'increment')).toBeInTheDocument();
});

test('paginator has prev button', () => {
  const { container } = render(<Paginator />);

  expect(getByTestId(container, 'decrease')).toBeInTheDocument();
});

test('buttons get disabled by props', () => {
  const { container } = render(<Paginator disabled />);

  expect(getByTestId(container, 'increment')).toBeDisabled();
  expect(getByTestId(container, 'decrease')).toBeDisabled();
});

test('paginator has a selector for page size', () => {
  const { container } = render(<Paginator />);

  expect(getByTestId(container, 'pageSize')).toBeInTheDocument();
});
