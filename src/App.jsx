import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Destino from './Destino';

function App() {
  const destinos = [
    { nome: 'Paris', descricao: 'A cidade do amor.' },
    { nome: 'Nova York', descricao: 'A cidade que nunca dorme.' },
    { nome: 'Tóquio', descricao: 'A capital do Japão.' }
  ];

  return (
    <div className="App">
      <Header />
      {destinos.map((destino, index) => (
        <Destino key={index} nome={destino.nome} descricao={destino.descricao} />
      ))}
      <Footer />
    </div>
  );
}

export default App;