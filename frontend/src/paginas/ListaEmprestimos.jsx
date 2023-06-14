import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListaEmprestimos() {
  const [emprestimos, setEmprestimos] = useState([]);
  const [livros, setLivros] = useState([]);
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    carregarEmprestimos();
    carregarLivros();
    carregarAlunos();
  }, []);

  function carregarEmprestimos() {
    axios.get('http://localhost:3005/emprestimo').then((resposta) => {
      setEmprestimos(resposta.data);
    });
  }

  function carregarLivros() {
    axios.get('http://localhost:3005/livro').then((resposta) => {
      
      setLivros(resposta.data);
    });
  }

  function carregarAlunos() {
    axios.get('http://localhost:3005/aluno').then((resposta) => {
      setAlunos(resposta.data);
    });
  }

  function formatarData(data) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(data).toLocaleDateString('pt-BR', options);
  }

  function obterNomeAluno(idAluno) {
    const aluno = alunos.find((aluno) => aluno._id === idAluno);
    return aluno ? aluno.nome : '';
  }

  function obterTituloLivro(idLivro) {
    const livro = livros.find((livro) => livro._id === idLivro);
    return livro ? livro.titulo : '';
  }

  return (
    <div>
      <h2>Lista de Empréstimos</h2>
      <table id='cadastro'>
        <thead>
          <tr>
            <th>Aluno</th>
            <th>Livro</th>
            <th>Data de Devolução</th>
          </tr>
        </thead>
        <tbody>
          {emprestimos.map((emprestimo) => (
            <tr key={emprestimo._id}>
              <td>{obterNomeAluno(emprestimo.id_aluno)}</td>
              <td>{obterTituloLivro(emprestimo.id_livro)}</td>
              <td>{formatarData(emprestimo.dataDevolucao)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaEmprestimos;
