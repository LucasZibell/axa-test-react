import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function GnomeCard({ gnome }) {
  const {
    name,
    thumbnail,
    age,
    wantedFriend,
    hair_color: hairColor,
    height,
    wantedProfession,
    weight
  } = gnome;
  return (
    <div className="column gnome-card">
      <img className="self-center m-bottom-2 gnome-image" src={thumbnail} />
      <span className="m-bottom-2 gnome-name">Name: {name}</span>
      <span className="m-bottom-2 gnome-information">Age: {age}</span>
      <div className="space-between">
        <span className="gnome-information">Hair Color: {hairColor}</span>
        <div className="hair-color" />
      </div>
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
    wantedFriend: PropTypes.arrayOf(PropTypes.string),
    wantedProfession: PropTypes.arrayOf(PropTypes.string),
    weight: PropTypes.number
  })
};

export default GnomeCard;
