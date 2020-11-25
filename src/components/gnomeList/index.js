import React, { useEffect, useState } from 'react';
import BounceLoader from 'react-spinners/BounceLoader';

import { actionCreators } from '../../context/reducer';
import { useSelector, useDispatch } from '../../context';
import { getGnomes } from '../../services/gnomes';
import applyFilters from '../../utils/applyFilters';
import GnomeCard from '../gnomeCard';
import Paginator from '../paginator';

import styles from './styles.module.scss';

function GnomeList() {
  const [gnomes, setGnomes] = useState({});
  const [gnomePage, setGnomePage] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const selectedCity = useSelector(state => state.selectedCity);
  const pageSize = useSelector(state => state.pageSize);
  const filters = useSelector(state => state.filters);
  const currentPage = useSelector(state => state.currentPage);

  useEffect(() => {
    setLoading(true);
    getGnomes().then(({ data }) => {
      const cities = Object.keys(data);
      setGnomes(data);
      dispatch(actionCreators.setCities({ cities, selectedCity: cities[0] }));
      setLoading(false);
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
      <div className="row wrap center space-between m-bottom-4">
        <span className={styles.listTitle}>Characters</span>
        <Paginator disabled={loading} />
      </div>
      {loading ? (
        <div className={`width-100 row center ${styles.loaderScreen}`}>
          <BounceLoader color="#0A6CB4" />
        </div>
      ) : (
        <div className={styles.gnomeList}>
          {gnomePage.map(elem => (
            <GnomeCard key={elem.id} gnome={elem} />
          ))}
        </div>
      )}
    </div>
  );
}

export default GnomeList;
