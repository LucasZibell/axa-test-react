import React from 'react';

import { useSelector } from '../../context';

function Cities() {
  const cities = useSelector(state => state.cities);
  return <span>{cities}</span>;
}

export default Cities;
