import React from 'react';

import './global.css';

import Routes from './routes';

function App() {
  return(
    <Routes/>
      
  );
}

export default App;

/*
  // let [counter, setCounter] = useState(0);

// Toda vez que precisarmos de um componente que muda o valor,
// Precisamos usar o state
// Array [valor, função]

  function increment(){
    setCounter(counter + 1) ;
    
  }
  
  return (
    <div>
      <Header>
          Contador: {counter}
      </Header>
      <button onClick={increment}>Incrrementar</button>
    </div>
      
    
  );
  */