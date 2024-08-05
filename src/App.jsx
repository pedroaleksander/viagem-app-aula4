// App.jsx (modificado)
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Destino from './Destino';
import FormDestino from './FormDestino';

function App() {
  const [destinos, setDestinos] = useState([
    { nome: 'Paris', descricao: 'A cidade do amor.' },
    { nome: 'Nova York', descricao: 'A cidade que nunca dorme.' },
    { nome: 'Tóquio', descricao: 'A capital do Japão.' }
  ]);

  const adicionarDestino = (novoDestino) => {
    setDestinos([...destinos, novoDestino]);
  };

  return (
    <div className="App">
      <Header />
      <FormDestino adicionarDestino={adicionarDestino} />
      {destinos.map((destino, index) => (
        <Destino key={index} nome={destino.nome} descricao={destino.descricao} />
      ))}
      <Footer />
    </div>
  );
}

export default App;