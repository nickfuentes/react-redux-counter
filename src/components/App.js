import React from 'react';
import logo from './logo.svg';
import './App.css';
import IncrementCounter from './IncrementCounter'
import ViewCounter from './ViewCounter'
import { connect } from 'react-redux'

function App() {
  return (
    <div>
      <IncrementCounter />
    </div>
  );
}

export default App;
