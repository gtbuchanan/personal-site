import React from 'react';
import './App.css';
import NetworkProfile from './NetworkProfile';

function App() {
  return (
    <div className="App">
      <header>
        <h1>George Taylor Buchanan</h1>
        <h2>Senior Software Engineer</h2>
      </header>

      <NetworkProfile />

      <footer>
        StrengthsFinder: Learner, Achiever, Analytical, Intellection, Responsibility
      </footer>
    </div>
  );
}

export default App;
