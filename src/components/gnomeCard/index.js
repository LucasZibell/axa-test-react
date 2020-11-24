import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function GnomeCard({ gnome }) {
  const {
    name,
    thumbnail,
    age,
    // wantedFriend,
    hair_color: hairColor
    // height,
    // wantedProfession,
    // weight
  } = gnome;
  return (
    <div className={`column ${styles.gnomeCard}`}>
      <img className={`self-center m-bottom-2 ${styles.gnomeImage}`} src={thumbnail} />
      <span className={`m-bottom-2 ${styles.gnomeName}`}>Name: {name}</span>
      <span className={`m-bottom-2 ${styles.gnomeInformation}`}>Age: {age}</span>
      <span className={styles.gnomeInformation}>Hair Color: {hairColor}</span>
    </div>
  );
}

GnomeCard.propTypes = {
  gnome: PropTypes.shape({
    age: PropTypes.number,
    // eslint-disable-next-line camelcase
    hair_color: PropTypes.string,
    height: PropTypes.number,
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    wantedFriend: PropTypes.arrayOf(PropTypes.string),
    wantedProfession: PropTypes.arrayOf(PropTypes.string),
    weight: PropTypes.number
  })
};

export default GnomeCard;
