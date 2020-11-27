import React from 'react';

import NotFound from '../../assets/not-found.svg';

import styles from './styles.module.scss';

function EmptyList() {
  return (
    <div className={`column center ${styles.emptyListContainer}`}>
      <img data-testid="emptyListImage" src={NotFound} className={`m-bottom-4 ${styles.notFoundIcon}`} />
      <span data-testid="emptyListText" className={`m-bottom-2 ${styles.emptyListText}`}>
        Seems no gnome matches your filters
      </span>
      <span data-testid="emptyListSecondaryText" className={`m-bottom-2 ${styles.emptyListText}`}>
        Try to use other search terms
      </span>
    </div>
  );
}

export default EmptyList;
