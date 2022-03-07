import React from 'react';
import logo from './logo.svg';
import './App.css';
import { LoginProfile } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <LoginProfile fullName='Thinh Vo'/>
      </header>
    </div>
  );
}

export default App;
