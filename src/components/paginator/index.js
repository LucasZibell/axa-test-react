import React from 'react';

import { useSelector, useDispatch } from '../../context';
import { actionCreators } from '../../context/reducer';

import './styles.scss';

function Paginator() {
  const currentPage = useSelector(state => state.currentPage);
  const existNextPage = useSelector(state => state.existNextPage);
  const dispatch = useDispatch();

  const changePage = newPage => dispatch(actionCreators.setCurrentPage(newPage));

  return (
    <div>
      <button
        className="paginator-button"
        disabled={currentPage === 1}
        type="button"
        onClick={() => changePage(currentPage - 1)}
      >
        Prev.
      </button>
      <span className="page-input">{currentPage}</span>
      <button
        className="paginator-button"
        disabled={!existNextPage}
        type="button"
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Paginator;
