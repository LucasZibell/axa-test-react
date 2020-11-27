import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Filters from './index';

test('Filters has a filter for name', () => {
  const { container } = render(<Filters />);

  expect(getByTestId(container, 'nameFilter')).toBeInTheDocument();
});

test('Filters has a filter for age', () => {
  const { container } = render(<Filters />);

  expect(getByTestId(container, 'ageFilter')).toBeInTheDocument();
});

test('Filters has a filter for hair', () => {
  const { container } = render(<Filters />);

  expect(getByTestId(container, 'hairFilter')).toBeInTheDocument();
});

test('Filters has a filter for friends', () => {
  const { container } = render(<Filters />);

  expect(getByTestId(container, 'friendFilter')).toBeInTheDocument();
});

test('Filters has a filter for professions', () => {
  const { container } = render(<Filters />);

  expect(getByTestId(container, 'professionFilter')).toBeInTheDocument();
});

test('Filters has a filter for height', () => {
  const { container } = render(<Filters />);

  expect(getByTestId(container, 'heightFilter')).toBeInTheDocument();
});

test('Filters has a filter for weight', () => {
  const { container } = render(<Filters />);

  expect(getByTestId(container, 'weightFilter')).toBeInTheDocument();
});

test('All filters are enabled', () => {
  const { container } = render(<Filters />);

  expect(getByTestId(container, 'nameFilter')).toBeEnabled();
  expect(getByTestId(container, 'ageFilter')).toBeEnabled();
  expect(getByTestId(container, 'hairFilter')).toBeEnabled();
  expect(getByTestId(container, 'friendFilter')).toBeEnabled();
  expect(getByTestId(container, 'professionFilter')).toBeEnabled();
  expect(getByTestId(container, 'heightFilter')).toBeEnabled();
  expect(getByTestId(container, 'weightFilter')).toBeEnabled();
});
