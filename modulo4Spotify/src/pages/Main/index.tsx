import React, { useState } from 'react';
import { Container, Text } from './styles';

interface State {
  teste: string
}


const Main = () => {
  const [state] = useState({ teste: 'teste' } as State);

  return (
    <Container>
      <Text>{state.teste}</Text>
    </Container >
  );
}

export default Main;
