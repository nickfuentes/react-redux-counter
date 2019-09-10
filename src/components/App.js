import React from 'react';
import IncrementCounter from './IncrementCounter'
import DecrementCounter from './DecrementCounter'
import ViewCounter from './ViewCounter';
import Add10 from './Add10'
import Subtract10 from './Subtract10'

function App(props) {

  return (
    <div>
      <ViewCounter />
      <IncrementCounter />
      <DecrementCounter />
      <Add10 />
      <Subtract10 />
    </div>
  );
}

export default App;
