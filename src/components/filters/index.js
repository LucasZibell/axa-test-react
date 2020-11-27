import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from '../../context';
import { actionCreators } from '../../context/reducer';

import styles from './styles.module.scss';

const searchDelay = 500;

function Filters() {
  const [filters, setFilter] = useState({});
  const dispatch = useDispatch();

  const cities = useSelector(state => state.cities);
  const selectedCity = useSelector(state => state.selectedCity);

  const changeSelectedCity = newCity => dispatch(actionCreators.setNewCity(newCity));

  useEffect(() => {
    const delayDebounce = setTimeout(() => dispatch(actionCreators.setFilters(filters)), searchDelay);

    return () => clearTimeout(delayDebounce);
  }, [dispatch, filters]);

  return (
    <div className="column m-bottom-10">
      <div className="row m-bottom-2">
        <span className={`m-right-4 ${styles.city}`}>Select a city:</span>
        {cities.map(city => (
          <button
            type="button"
            key={city}
            onClick={() => changeSelectedCity(city)}
            className={`m-right-4 ${styles.city} ${city === selectedCity ? styles.activeCity : ''}`}
          >
            {city}
          </button>
        ))}
      </div>
      <div className={styles.filterContainer}>
        <input
          aria-label="Filter by name"
          data-testid="nameFilter"
          placeholder="Name"
          className={styles.filterInput}
          type="text"
          onChange={e => setFilter({ ...filters, name: e.target.value })}
        />
        <input
          aria-label="Filter by age"
          data-testid="ageFilter"
          placeholder="Age"
          className={styles.filterInput}
          type="number"
          onChange={e => setFilter({ ...filters, age: Number(e.target.value) })}
        />
        <input
          aria-label="Filter by hair color"
          data-testid="hairFilter"
          placeholder="Hair"
          className={styles.filterInput}
          type="text"
          onChange={e => setFilter({ ...filters, hairColor: e.target.value })}
        />
        <input
          aria-label="Filter by friends"
          placeholder="Friend"
          data-testid="friendFilter"
          className={styles.filterInput}
          type="text"
          onChange={e => setFilter({ ...filters, wantedFriend: e.target.value })}
        />
        <input
          aria-label="Filter by profession"
          placeholder="Profession"
          data-testid="professionFilter"
          className={styles.filterInput}
          type="text"
          onChange={e => setFilter({ ...filters, wantedProfession: e.target.value })}
        />
        <input
          aria-label="Filter by height"
          placeholder="Height"
          data-testid="heightFilter"
          className={styles.filterInput}
          type="number"
          onChange={e => setFilter({ ...filters, height: Number(e.target.value) })}
        />
        <input
          aria-label="Filter by weight"
          placeholder="Weight"
          data-testid="weightFilter"
          className={styles.filterInput}
          type="number"
          onChange={e => setFilter({ ...filters, weight: Number(e.target.value) })}
        />
      </div>
    </div>
  );
}

export default Filters;
