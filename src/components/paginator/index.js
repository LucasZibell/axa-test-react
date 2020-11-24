import React from 'react';

import { useSelector, useDispatch } from '../../context';
import { actionCreators } from '../../context/reducer';

import styles from './styles.module.scss';

function Paginator() {
  const currentPage = useSelector(state => state.currentPage);
  const existNextPage = useSelector(state => state.existNextPage);
  const dispatch = useDispatch();

  const changePage = newPage => dispatch(actionCreators.setCurrentPage(newPage));

  const changePageSize = e => dispatch(actionCreators.setPageSize(Number(e.target.value)));

  return (
    <div className="row middle space-between">
      <button
        className={`m-right-2 ${styles.paginatorButton}`}
        disabled={currentPage === 1}
        type="button"
        onClick={() => changePage(currentPage - 1)}
      >
        Prev.
      </button>
      <span className={`m-right-2 ${styles.pageInput}`}>{currentPage}</span>
      <button
        className={`m-right-2 ${styles.paginatorButton}`}
        disabled={!existNextPage}
        type="button"
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
      <select className={styles.pageSize} onChange={changePageSize}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option selected="selected" value="20">
          20
        </option>
        <option value="50">50</option>
      </select>
    </div>
  );
}

export default Paginator;
