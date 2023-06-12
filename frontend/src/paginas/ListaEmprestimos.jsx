import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ListaEmprestimos() {
  const [emprestimos, setEmprestimos] = useState([]);

  useEffect(() => {
    carregarEmprestimos();
  }, []);

  function carregarEmprestimos() {
    axios.get('http://localhost:3005/emprestimo').then((resposta) => {
      setEmprestimos(resposta.data);
    });
  }

  function formatarData(data) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(data).toLocaleDateString('pt-BR', options);
  }

  return (
    <div>
      <h2>Lista de Empréstimos</h2>
      <table>
        <thead>
          <tr>
            <th>Aluno</th>
            <th>Livro</th>
            <th>Data de Devolução</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {emprestimos.map((emprestimo) => (
            <tr key={emprestimo._id}>
              <td>{emprestimo.id_aluno && emprestimo.id_aluno.nome}</td>
              <td>{emprestimo.id_livro && emprestimo.id_livro.titulo}</td>
              <td>{formatarData(emprestimo.dataDevolucao)}</td>
              <td>{emprestimo.status_emprestimo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaEmprestimos;
