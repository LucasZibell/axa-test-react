import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from '../../context';
import { actionCreators } from '../../context/reducer';
import useScreenSize from '../../hooks/useScreenSize';
import { mobileBreakPoint } from '../../constants/responsive';

import styles from './styles.module.scss';
import { paginationOptions, mobilePageSize, desktopPageSize } from './constants';

function Paginator({ disabled }) {
  const { screenWidth } = useScreenSize();
  const currentPage = useSelector(state => state.currentPage);
  const existNextPage = useSelector(state => state.existNextPage);
  const pageSize = useSelector(state => state.pageSize);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.setPageSize(screenWidth <= mobileBreakPoint ? mobilePageSize : desktopPageSize));
  }, [dispatch, screenWidth]);

  const changePage = newPage => dispatch(actionCreators.setCurrentPage(newPage));

  const changePageSize = e => dispatch(actionCreators.setPageSize(Number(e.target.value)));

  return (
    <div className="row middle space-between">
      <button
        data-testid="decrease"
        className={`m-right-2 ${styles.paginatorButton}`}
        disabled={currentPage === 1 || disabled}
        type="button"
        onClick={() => changePage(currentPage - 1)}
      >
        Prev.
      </button>
      <span data-testid="currentPage" className={`m-right-2 ${styles.pageInput}`}>
        {currentPage}
      </span>
      <button
        data-testid="increment"
        className={`m-right-2 ${styles.paginatorButton}`}
        disabled={!existNextPage || disabled}
        type="button"
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
      <select
        data-testid="pageSize"
        value={pageSize}
        className={styles.pageSize}
        onChange={changePageSize}
        disabled={disabled}
      >
        {paginationOptions.map(elem => (
          <option key={elem} value={elem}>
            {elem}
          </option>
        ))}
      </select>
    </div>
  );
}

Paginator.propTypes = {
  disabled: PropTypes.bool
};

export default Paginator;
