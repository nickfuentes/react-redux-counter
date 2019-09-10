import React from 'react';
import IncrementCounter from './IncrementCounter'
import DecrementCounter from './DecrementCounter'
import ViewCounter from './ViewCounter';

function App(props) {

  return (
    <div>
      <IncrementCounter />
      <ViewCounter />
      <DecrementCounter />
    </div>
  );
}

export default App;
