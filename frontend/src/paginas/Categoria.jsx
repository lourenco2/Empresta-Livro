import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Aside from '../layout/Aside';
import "./Cadastros.css";

function Categoria() {
  const [categoria, setCategoria] = useState('');
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    carregarCategorias();
  }, []);

  function carregarCategorias() {
    axios.get('http://localhost:3005/categoria').then((resposta) => {
      setCategorias(resposta.data);
    });
  }

  function cadastrarCategoria() {
    if (categoria.trim() === '') {
      alert('Por favor, insira o nome da categoria.');
      return;
    }

    const categoriaJaCadastrada = categorias.find((cat) => cat.categoria === categoria);
    if (categoriaJaCadastrada) {
      alert('A categoria já está cadastrada.');
      return;
    }

    axios
      .post('http://localhost:3005/categoria', { categoria: categoria })
      .then(() => {
        alert('Categoria cadastrada com sucesso!');
        setCategoria('');
        carregarCategorias();
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
      <h2 id='cadCategoria'>Cadastro de Categoria</h2>
      <form>
        <label id='NomeCategoria'>Nome da Categoria:</label>
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        <button type="submit" id='BotaoCadCategoria' onClick={cadastrarCategoria}>
          +
        </button>
      </form>
      </div>
    </div>
  );
}

export default Categoria;