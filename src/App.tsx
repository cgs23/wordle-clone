import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import GameContainer from './components/game-container/GameContainer';

import store from './store/reducers/reducer';
import Keyboard from './components/keyboard/Keyboard';
import Grid from './components/grid/Grid';
function App() {

  return (
    <Provider store={store}>
      <div className='container'>
        <Header></Header>
        <Grid></Grid>
        <Keyboard></Keyboard>
      </div>
    </Provider>
  );
}

export default App;
