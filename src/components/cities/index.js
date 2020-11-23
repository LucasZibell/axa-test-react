import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from '../../context';
import { actionCreators } from '../../context/reducer';

import './styles.scss';

const searchDelay = 500;

function Cities() {
  const [filteredName, setFilterName] = useState('');
  const cities = useSelector(state => state.cities);
  const dispatch = useDispatch();

  useEffect(() => {
    const delayDebounce = setTimeout(() => dispatch(actionCreators.setFilterName(filteredName)), searchDelay);

    return () => clearTimeout(delayDebounce);
  }, [dispatch, filteredName]);

  return (
    <div>
      <span>{cities}</span>
      <input className="name-input" type="text" onChange={e => setFilterName(e.target.value)} />
    </div>
  );
}

export default Cities;
