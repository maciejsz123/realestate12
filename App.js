import React from 'react';
import Navbar from './components/navbar';
import Options from './components/options';
import Houses from './components/houses';
import './styles/App.sass';

function App() {
  return (
    <div className="container-fluid">
      <Navbar />
      <Options />
      <Houses />
    </div>
  );
}

export default App;
