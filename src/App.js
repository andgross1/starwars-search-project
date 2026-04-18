import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Planets from './components/Planets';
import Provider from './context/myProvider';

function App() {
  return (
    <Provider>
      <div className="container">
        <h1>Star Wars Planets</h1>
        <Filters />
        <Planets />
      </div>
    </Provider>
  );
}

export default App;
