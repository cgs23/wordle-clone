import React from 'react';
import Header from './components/header/Header';
import Grid from './components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';

function App() {
  return (
    <div className='flex-container'>
      <Header></Header>
      <Grid></Grid>
      <Keyboard></Keyboard>
    </div>
  );
}

export default App;
