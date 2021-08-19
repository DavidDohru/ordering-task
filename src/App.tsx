import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {MainBlock} from './components/MainBLock/MainBlock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <title>Оформлення замовлення</title>
        <MainBlock/>
      </header>
    </div>
  );
}

export default App;
