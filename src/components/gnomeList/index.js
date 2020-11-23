import React, { useEffect, useState } from 'react';

import { actionCreators } from '../../context/reducer';
import { useSelector, useDispatch } from '../../context';
import { getGnomes } from '../../services/gnomes';

import './styles.scss';

function GnomeList() {
  const [gnomes, setGnomes] = useState({});
  const dispatch = useDispatch();
  const selectedCity = useSelector(state => state.selectedCity);
  const filteredName = useSelector(state => state.filterName);

  useEffect(() => {
    getGnomes().then(({ data }) => {
      const cities = Object.keys(data);
      setGnomes(data);
      dispatch(actionCreators.setCities({ cities, selectedCity: cities[0] }));
    });
  }, [dispatch]);

  return (
    <div>
      <span>Listado</span>
      <div className="column character-list">
        {selectedCity &&
          gnomes[selectedCity]
            .filter(({ name }) => name.includes(filteredName))
            .map(elem => (
              <span className="m-bottom-2" key={elem.id}>
                {elem.name}
              </span>
            ))}
      </div>
    </div>
  );
}

export default GnomeList;
