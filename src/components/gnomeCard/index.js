import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import joinArray from '../../utils/joinArray';

import styles from './styles.module.scss';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '600px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

function GnomeCard({ gnome }) {
  const { name, thumbnail, age, friends, hair_color: hairColor, height, professions, weight } = gnome;
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
        <img className={`self-center m-bottom-2 ${styles.gnomeImage}`} src={thumbnail} />
        <span className={`m-bottom-2 ${styles.gnomeInformation}`}>Name: {name}</span>
        <span className={`m-bottom-2 ${styles.gnomeInformation}`}>Age: {age}</span>
        <span className={styles.gnomeInformation}>Hair: {hairColor}</span>
      </button>
      {isOpen && (
        <Modal
          closeTimeoutMS={500}
          style={customStyles}
          isOpen={isOpen}
          onRequestClose={() => setOpenDetails(false)}
        >
          <div className={`column ${styles.modalContainer}`}>
            <span className={`m-bottom-3 self-center ${styles.gnomeTitle}`}>{name}</span>
            <img className={`self-center m-bottom-4 ${styles.gnomeModalImage}`} src={thumbnail} />
            <div className={styles.gnomeInformationBox}>
              <span className={`m-bottom-2 ${styles.gnomeInformation}`}>Age: {age}</span>
              <span className={`m-bottom-2 ${styles.gnomeInformation}`}>Hair: {hairColor}</span>
              <span className={`m-bottom-2 ${styles.gnomeInformation}`}>Height: {height}</span>
              <span className={`m-bottom-2 ${styles.gnomeInformation}`}>
                Friends: {friendsText || 'None'}
              </span>
              <span className={`m-bottom-2 ${styles.gnomeInformation}`}>Weight: {weight}</span>
              <span className={`m-bottom-2 ${styles.gnomeInformation}`}>
                Professions: {professionText || 'None'}
              </span>
            </div>
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
