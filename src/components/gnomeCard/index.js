/* eslint-disable react/forbid-dom-props */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import { mobileBreakPoint } from '../../constants/responsive';
import joinArray from '../../utils/joinArray';
import useScreenSize from '../../hooks/useScreenSize';

import styles from './styles.module.scss';

function GnomeCard({ gnome }) {
  const { name, thumbnail, age, friends, hair_color: hairColor, height, professions, weight } = gnome;
  const { screenWidth } = useScreenSize();
  const [isOpen, setOpenDetails] = useState(false);
  const [friendsText, setFriendsText] = useState('');
  const [professionText, setProfessionText] = useState('');

  useEffect(() => {
    setFriendsText(joinArray(friends));
  }, [friends]);

  useEffect(() => {
    setProfessionText(joinArray(professions));
  }, [professions]);

  return (
    <>
      <button type="button" onClick={() => setOpenDetails(true)} className={`column ${styles.gnomeCard}`}>
        {screenWidth > mobileBreakPoint && (
          <img className={`self-center m-bottom-2 ${styles.gnomeImage}`} src={thumbnail} />
        )}
        <span className={`m-bottom-2 ${styles.gnomeInformation}`}>
          Name: <span className={`${styles.gnomeInformation} bold`}>{name}</span>
        </span>
        <span className={`m-bottom-2 ${styles.gnomeInformation}`}>
          Age: <span className={`${styles.gnomeInformation} bold`}>{age}</span>
        </span>
        <span className={styles.gnomeInformation}>
          Hair:{' '}
          <span className={`${styles.gnomeInformation} bold`} style={{ color: hairColor }}>
            {hairColor}
          </span>
        </span>
      </button>
      {isOpen && (
        <Modal
          closeTimeoutMS={500}
          className={`column ${styles.gnomeModal}`}
          isOpen={isOpen}
          onRequestClose={() => setOpenDetails(false)}
        >
          <span className={`m-bottom-3 self-center ${styles.gnomeTitle}`}>{name}</span>
          <img className={`self-center m-bottom-4 ${styles.gnomeModalImage}`} src={thumbnail} />
          <div className={styles.gnomeInformationBox}>
            <span className={`${styles.gnomeModalInformation}`}>Age: {age}</span>
            <div className="row baseline">
              <span className={`m-right-1 ${styles.gnomeModalInformation}`}>Hair: {hairColor}</span>
              <div className={styles.hairColor} style={{ 'background-color': hairColor }} />
            </div>
            <span className={`${styles.gnomeModalInformation}`}>Height: {height}</span>
            <span className={`${styles.gnomeModalInformation}`}>Friends: {friendsText || 'None'}</span>
            <span className={`${styles.gnomeModalInformation}`}>Weight: {weight}</span>
            <span className={`${styles.gnomeModalInformation}`}>Professions: {professionText || 'None'}</span>
          </div>
        </Modal>
      )}
    </>
  );
}

GnomeCard.propTypes = {
  gnome: PropTypes.shape({
    age: PropTypes.number,
    friends: PropTypes.arrayOf(PropTypes.string),
    // eslint-disable-next-line camelcase
    hair_color: PropTypes.string,
    height: PropTypes.number,
    name: PropTypes.string,
    professions: PropTypes.arrayOf(PropTypes.string),
    thumbnail: PropTypes.string,
    weight: PropTypes.number
  })
};

export default GnomeCard;
