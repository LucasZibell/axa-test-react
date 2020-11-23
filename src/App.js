import React, { useReducer } from 'react';

import GnomeList from './components/gnomeList';
import GnomeCard from './components/gnomeCard';
import Cities from './components/cities';
import { reducer as userReducer, INITIAL_STATE } from './context/reducer';
import { Context } from './context';

import './scss/application.scss';

function App() {
  const [gnomeState, gnomeDispatch] = useReducer(userReducer, INITIAL_STATE);

  return (
    <div className="App">
      <Context.Provider value={{ state: gnomeState, dispatch: gnomeDispatch }}>
        <Cities />
        <GnomeCard />
        <GnomeList />
      </Context.Provider>
    </div>
  );
}

export default App;
