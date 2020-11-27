/* eslint-disable camelcase */
import React from 'react';
import { render, getByTestId, queryByTestId } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect';

import { mobileBreakPoint } from '../../constants/responsive';

import GnomeCard from './index';

const mockGnome = {
  name: 'Tom',
  thumbnail: '',
  age: 0,
  friends: [],
  hair_color: '',
  height: 0,
  professions: [],
  weight: 0
};

test('Gnome card has name, age and hair', () => {
  const { container } = render(<GnomeCard gnome={mockGnome} />);

  expect(getByTestId(container, 'gnomeName')).toBeInTheDocument();
  expect(getByTestId(container, 'gnomeAge')).toBeInTheDocument();
  expect(getByTestId(container, 'gnomeHair')).toBeInTheDocument();
});

test('Gnome card has an image when the screen is big', () => {
  const { container } = render(<GnomeCard gnome={mockGnome} />);

  expect(getByTestId(container, 'gnomeImage')).toBeInTheDocument();
});

test('Gnome card does not have an image when the screen is small', () => {
  const { container } = render(<GnomeCard gnome={mockGnome} />);

  act(() => {
    global.innerWidth = mobileBreakPoint;
    global.dispatchEvent(new Event('resize'));
  });

  expect(queryByTestId(container, 'gnomeImage')).not.toBeInTheDocument();
});
