import React, { useEffect, useState } from 'react';

import { actionCreators } from '../../context/reducer';
import { useSelector, useDispatch } from '../../context';
import { getGnomes } from '../../services/gnomes';
import applyFilters from '../../utils/applyFilters';

import './styles.scss';

const pageSize = 20;

function GnomeList() {
  const [gnomes, setGnomes] = useState({});
  const [gnomePage, setGnomePage] = useState([]);
  const dispatch = useDispatch();
  const selectedCity = useSelector(state => state.selectedCity);
  const filters = useSelector(state => state.filters);
  const currentPage = useSelector(state => state.currentPage);

  useEffect(() => {
    getGnomes().then(({ data }) => {
      const cities = Object.keys(data);
      setGnomes(data);
      dispatch(actionCreators.setCities({ cities, selectedCity: cities[0] }));
    });
  }, [dispatch]);

  useEffect(() => {
    const gnomesInCity = gnomes[selectedCity] || [];
    const min = pageSize * (currentPage - 1);
    const max = pageSize * currentPage;
    let newPage = [];
    if (gnomesInCity.length) {
      const wantedGnomesInCity = applyFilters(gnomesInCity, filters);
      newPage = wantedGnomesInCity.slice(min, max);
      dispatch(actionCreators.setExistNextPage(!!wantedGnomesInCity[max]));
    }
    setGnomePage(newPage);
  }, [currentPage, dispatch, filters, gnomes, selectedCity]);

  return (
    <div>
      <span>Listado</span>
      <div className="column character-list">
        {gnomePage.map(elem => (
          <span className="m-bottom-2" key={elem.id}>
            {elem.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default GnomeList;
