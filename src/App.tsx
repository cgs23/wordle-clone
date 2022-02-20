import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/header/Header';
import { Toaster } from 'react-hot-toast';
import store from './store/reducers/reducer';
import Keyboard from './components/keyboard/Keyboard';
import Grid from './components/grid/Grid';
import Footer from './components/footer/Footer';
function App() {

  return (
    <Provider store={store}>
      <Toaster/>
      <div className='container'>
        <Header></Header>
        <Grid></Grid>
        <Keyboard></Keyboard>
        <Footer></Footer>
      </div>
    </Provider>
  );
}

export default App;
