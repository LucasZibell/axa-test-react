import React from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from '../../context';
import { actionCreators } from '../../context/reducer';

import styles from './styles.module.scss';

// eslint-disable-next-line no-magic-numbers
const paginationOptions = [5, 10, 20, 50];

function Paginator({ disabled }) {
  const currentPage = useSelector(state => state.currentPage);
  const existNextPage = useSelector(state => state.existNextPage);
  const dispatch = useDispatch();

  const changePage = newPage => dispatch(actionCreators.setCurrentPage(newPage));

  const changePageSize = e => dispatch(actionCreators.setPageSize(Number(e.target.value)));

  return (
    <div className="row middle space-between">
      <button
        className={`m-right-2 ${styles.paginatorButton}`}
        disabled={currentPage === 1 || disabled}
        type="button"
        onClick={() => changePage(currentPage - 1)}
      >
        Prev.
      </button>
      <span className={`m-right-2 ${styles.pageInput}`}>{currentPage}</span>
      <button
        className={`m-right-2 ${styles.paginatorButton}`}
        disabled={!existNextPage || disabled}
        type="button"
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
      <select defaultValue="20" className={styles.pageSize} onChange={changePageSize} disabled={disabled}>
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
