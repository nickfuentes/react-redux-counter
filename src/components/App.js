import React from 'react';
import IncrementCounter from './IncrementCounter'
import DecrementCounter from './DecrementCounter'
import ViewCounter from './ViewCounter';
import Add10 from './Add10'
import Subtract10 from './Subtract10'
import { Container } from 'reactstrap';

function App(props) {

  return (
    <div>
      <Container className="view">
        <ViewCounter />
      </Container>
      <Container>
        <IncrementCounter />
        <DecrementCounter />
        <Add10 />
        <Subtract10 />
      </Container>
    </div>
  );
}

export default App;
