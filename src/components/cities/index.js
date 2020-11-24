import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from '../../context';
import { actionCreators } from '../../context/reducer';

import './styles.scss';

const searchDelay = 500;

function Cities() {
  const [filters, setFilter] = useState({});
  const dispatch = useDispatch();

  const cities = useSelector(state => state.cities);

  useEffect(() => {
    const delayDebounce = setTimeout(() => dispatch(actionCreators.setFilters(filters)), searchDelay);

    return () => clearTimeout(delayDebounce);
  }, [dispatch, filters]);

  return (
    <div>
      <span>{cities}</span>
      <input
        placeholder="Name"
        className="name-input"
        type="text"
        onChange={e => setFilter({ ...filters, name: e.target.value })}
      />
      <input
        placeholder="Age"
        className="name-input"
        type="number"
        onChange={e => setFilter({ ...filters, age: Number(e.target.value) })}
      />
      <input
        placeholder="Friend"
        className="name-input"
        type="text"
        onChange={e => setFilter({ ...filters, wantedFriend: e.target.value })}
      />
      <input
        placeholder="Hair"
        className="name-input"
        type="text"
        onChange={e => setFilter({ ...filters, hairColor: e.target.value })}
      />
      <input
        placeholder="Height"
        className="name-input"
        type="number"
        onChange={e => setFilter({ ...filters, height: Number(e.target.value) })}
      />
      <input
        placeholder="Profession"
        className="name-input"
        type="text"
        onChange={e => setFilter({ ...filters, wantedProfession: e.target.value })}
      />
      <input
        placeholder="Weight"
        className="name-input"
        type="number"
        onChange={e => setFilter({ ...filters, weight: Number(e.target.value) })}
      />
    </div>
  );
}

export default Cities;
