import React, { useReducer } from 'react';

import GnomeList from './components/gnomeList';
import Filters from './components/filters';
import { reducer as userReducer, INITIAL_STATE } from './context/reducer';
import { Context } from './context';

import './scss/application.scss';

function App() {
  const [gnomeState, gnomeDispatch] = useReducer(userReducer, INITIAL_STATE);

  return (
    <div className="column main-page">
      <Context.Provider value={{ state: gnomeState, dispatch: gnomeDispatch }}>
        <Filters />
        <GnomeList />
      </Context.Provider>
    </div>
  );
}

export default App;
