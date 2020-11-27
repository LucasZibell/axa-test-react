import React from 'react';

import NotFound from '../../assets/not-found.svg';

import styles from './styles.module.scss';

function EmptyList() {
  return (
    <div className={`column center ${styles.emptyListContainer}`}>
      <img src={NotFound} className={`m-bottom-4 ${styles.notFoundIcon}`} />
      <span className={`m-bottom-2 ${styles.emptyListText}`}>Seems no gnome matches your filters</span>
      <span className={`m-bottom-2 ${styles.emptyListText}`}>Try to use other search terms</span>
    </div>
  );
}

export default EmptyList;
