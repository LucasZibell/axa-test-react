/* eslint-disable camelcase */
import { filterMock } from '../mocks/utilsMock';

import applyFilters from './applyFilters';

describe('When filtering', () => {
  const filters = {
    name: '',
    age: null,
    wantedFriend: '',
    hairColor: '',
    height: null,
    wantedProfession: '',
    weight: null
  };

  it('returns the elements that includes the same name', () => {
    expect(applyFilters(filterMock, { ...filters, name: 'Mina' })).toEqual([
      {
        age: 252,
        friends: ['Midwig Tinkblade', 'Ecki Mysttossle', 'Cogwitz Gyroratchet', 'Midwig Wrongblade'],
        hair_color: 'Red',
        height: 113.03983,
        name: 'Minabonk Voidslicer',
        professions: ['Smelter', 'Tax inspector', 'Mason'],
        weight: 39.57134
      }
    ]);
  });

  it('returns the elements that have the same age', () => {
    expect(applyFilters(filterMock, { ...filters, age: 212 })).toEqual([
      {
        age: 212,
        friends: ['Ecki Gyrobuster', 'Zedkin Nozzlespackle', 'Milli Clankswhistle', 'Libalia Magnatink'],
        hair_color: 'Green',
        height: 98.701645,
        name: 'Emmadette Gimbalpower',
        professions: ['Mason'],
        weight: 40.681095
      }
    ]);
  });

  it('returns the elements that have the same hair color', () => {
    expect(applyFilters(filterMock, { ...filters, hairColor: 'Pink' })).toEqual([
      {
        age: 306,
        friends: ['Cogwitz Chillwidget', 'Tinadette Chillbuster'],
        hair_color: 'Pink',
        height: 107.75835,
        name: 'Tobus Quickwhistle',
        professions: ['Metalworker', 'Woodcarver', 'Stonecarver', ' Tinker', 'Tailor', 'Potter'],
        weight: 39.065952
      }
    ]);
  });

  it('returns the same list if no filters are applied', () => {
    expect(applyFilters(filterMock, filters)).toEqual(filterMock);
  });

  it('returns the elements that have +-1 weight', () => {
    expect(applyFilters(filterMock, { ...filters, weight: 38.1 })).toEqual([
      {
        age: 306,
        friends: ['Cogwitz Chillwidget', 'Tinadette Chillbuster'],
        hair_color: 'Pink',
        height: 107.75835,
        name: 'Tobus Quickwhistle',
        professions: ['Metalworker', 'Woodcarver', 'Stonecarver', ' Tinker', 'Tailor', 'Potter'],
        weight: 39.065952
      }
    ]);
  });

  it('returns the elements that have +-1 height', () => {
    expect(applyFilters(filterMock, { ...filters, height: 108 })).toEqual([
      {
        age: 306,
        friends: ['Cogwitz Chillwidget', 'Tinadette Chillbuster'],
        hair_color: 'Pink',
        height: 107.75835,
        name: 'Tobus Quickwhistle',
        professions: ['Metalworker', 'Woodcarver', 'Stonecarver', ' Tinker', 'Tailor', 'Potter'],
        weight: 39.065952
      }
    ]);
  });

  it('returns the elements that have that friend', () => {
    expect(applyFilters(filterMock, { ...filters, wantedFriend: 'Eck' })).toEqual([
      {
        age: 212,
        friends: ['Ecki Gyrobuster', 'Zedkin Nozzlespackle', 'Milli Clankswhistle', 'Libalia Magnatink'],
        hair_color: 'Green',
        height: 98.701645,
        name: 'Emmadette Gimbalpower',
        professions: ['Mason'],
        weight: 40.681095
      },
      {
        age: 252,
        friends: ['Midwig Tinkblade', 'Ecki Mysttossle', 'Cogwitz Gyroratchet', 'Midwig Wrongblade'],
        hair_color: 'Red',
        height: 113.03983,
        name: 'Minabonk Voidslicer',
        professions: ['Smelter', 'Tax inspector', 'Mason'],
        weight: 39.57134
      }
    ]);
  });

  it('returns the elements that have that profession', () => {
    expect(applyFilters(filterMock, { ...filters, wantedProfession: 'Tax' })).toEqual([
      {
        age: 252,
        friends: ['Midwig Tinkblade', 'Ecki Mysttossle', 'Cogwitz Gyroratchet', 'Midwig Wrongblade'],
        hair_color: 'Red',
        height: 113.03983,
        name: 'Minabonk Voidslicer',
        professions: ['Smelter', 'Tax inspector', 'Mason'],
        weight: 39.57134
      }
    ]);
  });

  it('returns the elements that matches all the filters', () => {
    expect(
      applyFilters(filterMock, { ...filters, hairColor: 'Pi', weight: 39, name: 'To', age: 306 })
    ).toEqual([
      {
        age: 306,
        friends: ['Cogwitz Chillwidget', 'Tinadette Chillbuster'],
        hair_color: 'Pink',
        height: 107.75835,
        name: 'Tobus Quickwhistle',
        professions: ['Metalworker', 'Woodcarver', 'Stonecarver', ' Tinker', 'Tailor', 'Potter'],
        weight: 39.065952
      }
    ]);
  });
});
