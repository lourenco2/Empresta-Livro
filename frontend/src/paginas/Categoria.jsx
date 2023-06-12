import React, { useState } from 'react';
import axios from 'axios';
import Aside from '../layout/Aside';

function Categoria() {
  const [categoria, setCategoria] = useState('');

  function cadastrarCategoria() {
    if (categoria.trim() === '') {
      alert('Por favor, insira o nome da categoria.');
      return;
    }

    axios
      .post('http://localhost:3005/categoria', { categoria })
      .then(() => {
        alert('Categoria cadastrada com sucesso!');
        setCategoria('');
      })
      .catch((error) => {
        console.error('Erro ao cadastrar categoria:', error);
        alert('Ocorreu um erro ao cadastrar a categoria.');
      });
  }

  return (
    <div className="cadastros">
      <Aside />
      <div className='conteudo'>
      <h2>Cadastro de Categoria</h2>
      <form>
        <label>Nome da Categoria:</label>
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        <button type="button" onClick={cadastrarCategoria}>
          Cadastrar
        </button>
      </form>
      </div>
    </div>
  );
}

export default Categoria;
