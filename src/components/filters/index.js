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

  useEffect(() => {
    const delayDebounce = setTimeout(() => dispatch(actionCreators.setFilters(filters)), searchDelay);

    return () => clearTimeout(delayDebounce);
  }, [dispatch, filters]);

  return (
    <div className="column m-bottom-10">
      <div className="row m-bottom-2">
        <span className={`m-right-4 ${styles.city}`}>Select a city:</span>
        {cities.map(city => (
          <span
            key={city}
            className={`m-right-4 ${styles.city} ${city === selectedCity ? styles.activeCity : ''}`}
          >
            {city}
          </span>
        ))}
      </div>
      <div className="row space-between">
        <input
          placeholder="Name"
          className={`m-right-2 ${styles.nameInput}`}
          type="text"
          onChange={e => setFilter({ ...filters, name: e.target.value })}
        />
        <input
          placeholder="Age"
          className={`m-right-2 ${styles.nameInput}`}
          type="number"
          onChange={e => setFilter({ ...filters, age: Number(e.target.value) })}
        />
        <input
          placeholder="Friend"
          className={`m-right-2 ${styles.nameInput}`}
          type="text"
          onChange={e => setFilter({ ...filters, wantedFriend: e.target.value })}
        />
        <input
          placeholder="Hair"
          className={`m-right-2 ${styles.nameInput}`}
          type="text"
          onChange={e => setFilter({ ...filters, hairColor: e.target.value })}
        />
        <input
          placeholder="Height"
          className={`m-right-2 ${styles.nameInput}`}
          type="number"
          onChange={e => setFilter({ ...filters, height: Number(e.target.value) })}
        />
        <input
          placeholder="Profession"
          className={`m-right-2 ${styles.nameInput}`}
          type="text"
          onChange={e => setFilter({ ...filters, wantedProfession: e.target.value })}
        />
        <input
          placeholder="Weight"
          className={`m-right-2 ${styles.nameInput}`}
          type="number"
          onChange={e => setFilter({ ...filters, weight: Number(e.target.value) })}
        />
      </div>
    </div>
  );
}

export default Filters;
