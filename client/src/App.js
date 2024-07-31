import React from 'react';
import Board from './components/Board';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Checkers Game</h1>
      </header>
      <main>
        <Board />
      </main>
    </div>
  );
}

export default App;
