import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import Grid from './components/grid/Grid';
import Keyboard from './components/keyboard/Keyboard';
import store from './store/reducers/reducer';
function App() {

  return (
    <Provider store={store}>
      <div className='flex-container'>
        <Header></Header>
        <Grid></Grid>
        <Keyboard></Keyboard>
      </div>
    </Provider>
  );
}

export default App;
