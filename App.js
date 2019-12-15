import React from 'react';
import Navbar from './components/navbar';
import Options from './components/options';
import Houses from './components/houses';
import { Provider } from 'react-redux';
import store from './store';
import './styles/App.sass';

function App() {
  return (
    <Provider store={store}>
      <div className="container-fluid">
        <Navbar />
        <Options />
        <Houses />
      </div>
    </Provider>
  );
}

export default App;
