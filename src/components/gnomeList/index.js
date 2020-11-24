import React, { useEffect, useState } from 'react';

import { actionCreators } from '../../context/reducer';
import { useSelector, useDispatch } from '../../context';
import { getGnomes } from '../../services/gnomes';
import applyFilters from '../../utils/applyFilters';
import GnomeCard from '../gnomeCard';
import Paginator from '../paginator';

import './styles.scss';

function GnomeList() {
  const [gnomes, setGnomes] = useState({});
  const [gnomePage, setGnomePage] = useState([]);
  const dispatch = useDispatch();
  const selectedCity = useSelector(state => state.selectedCity);
  const pageSize = useSelector(state => state.pageSize);
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
  }, [currentPage, dispatch, filters, gnomes, pageSize, selectedCity]);

  return (
    <div className="width-100 m-bottom-10">
      <div className="row center space-between m-bottom-4 ">
        <span className="list-title">Characters</span>
        <Paginator />
      </div>
      <div className="row wrap">
        {gnomePage.map(elem => (
          <GnomeCard key={elem.id} gnome={elem} />
        ))}
      </div>
    </div>
  );
}

export default GnomeList;
