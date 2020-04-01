import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import Routes from './src/routes';

export default function App() {
  return (
    
    
      <Routes />
    
    
  );
}

// Tag view sempre é utilizada para tudo
    // O Text é usado para todo tipo de testo, não existe um h1, ou um parágrafo
    // Não coloco id para estilizar, sempre uso o style
/*
const styles = StyleSheet.create({
  container: {
    flex: 1, //Ocupar a tela inteira, todos tem display flex por padrão
    backgroundColor: '#ff1', //Não tenho ifem para separar as propriedades, usar CamelCase
    alignItems: 'center',
    justifyContent: 'center',
  },
});



  Não existe herança de estilos
  O componente filho não recebe o do pai
  Estilização própria por elemento
*/