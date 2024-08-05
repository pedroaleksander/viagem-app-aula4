// FormDestino.jsx
import React, { useState } from 'react';

const FormDestino = ({ adicionarDestino }) => {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    adicionarDestino({ nome, descricao });
    setNome('');
    setDescricao('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do destino"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição"
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />
      <button type="submit">Adicionar Destino</button>
    </form>
  );
};

export default FormDestino;