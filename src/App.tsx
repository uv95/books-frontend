import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Background from './components/Background/Background';
import Shelf from './components/Shelf/Shelf';
import AboveShelf from './components/AboveShelf/AboveShelf';
import UnderShelf from './components/UnderShelf/UnderShelf';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Background>
          <AboveShelf />
          <Shelf />
          <UnderShelf />
        </Background>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
