import "./Cadastros.css";
import axios from "axios";
import Aside from "../layout/Aside";
import { useState, useEffect } from "react";


function Aluno() {
  const [aluno, setAluno] = useState(null);
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    getAlunos();
  }, []);

  function getAlunos() {
    axios.get('http://localhost:3005/aluno').then((resposta) => {
      setAlunos(resposta.data);
    });
  }

  function novoAluno() {
    setAluno({
      _id: -1,
      nome: '',
      documento: '',
      telefone: '',
      endereco: '',
    });
  }

  function alterarAluno(campo, valor) {
    setAluno((alunoAtual) => ({
      ...alunoAtual,
      [campo]: valor,
    }));
  }

  function excluirAluno(id) {
    axios.delete('http://localhost:3005/aluno/' + id).then(() => {
      reiniciarEstadoDosAlunos();
    });
  }

  function salvarAluno() {
    if (aluno._id !== -1) {
      axios.put('http://localhost:3005/aluno/' + aluno._id, aluno).then(() => {
        reiniciarEstadoDosAlunos();
      });
    } else {
      axios.post('http://localhost:3005/aluno', aluno).then(() => {
        reiniciarEstadoDosAlunos();
      });
    }
  }

  function reiniciarEstadoDosAlunos() {
    setAluno(null);
    getAlunos();
  }

  function getLinhaDaTabela(aluno) {
    return (
      <tr key={aluno._id}>
        <td>{aluno.nome}</td>
        <td>{aluno.documento}</td>
        <td>{aluno.telefone}</td>
        <td>{aluno.endereco}</td>
        <td>
          <button
            type="button"
            onClick={() => {
              if (
                window.confirm('Confirmar a exclusão do aluno ' + aluno.nome + '?')
              ) {
                excluirAluno(aluno._id);
              }
            }}
          >
            Excluir
          </button>
          <button
            type="button"
            onClick={() => {
              setAluno(aluno);
            }}
          >
            Editar
          </button>
        </td>
      </tr>
    );
  }

  function getLinhasDaTabela() {
    return alunos.map((aluno) => getLinhaDaTabela(aluno));
  }

  function getTabela() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Nome</th>
            <th>Documento</th>
            <th>Telefone</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
          {getLinhasDaTabela()}
        </tbody>
      </table>
    );
  }

  function getFormulario() {
    return (
      <form>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={aluno.nome}
          onChange={(e) => alterarAluno(e.target.name, e.target.value)}
        />
        <label>Documento:</label>
        <input
          type="text"
          name="documento"
          value={aluno.documento}
          onChange={(e) => alterarAluno(e.target.name, e.target.value)}
        />
        <label>Telefone:</label>
        <input
          type="text"
          name="telefone"
          value={aluno.telefone}
          onChange={(e) => alterarAluno(e.target.name, e.target.value)}
        />
        <label>Endereço:</label>
        <input
          type="text"
          name="endereco"
          value={aluno.endereco}
          onChange={(e) => alterarAluno(e.target.name, e.target.value)}
        />
        <button type="button" onClick={salvarAluno}>
          Salvar
        </button>
        <button type="button" onClick={() => setAluno(null)}>
          Cancelar
        </button>
      </form>
    );
  }

  function getConteudo() {
    if (aluno === null) {
      return (
        <>
          <button type="button" onClick={novoAluno}>
            Novo Aluno
          </button>
          {getTabela()}
        </>
      );
    } else {
      return getFormulario();
    }
  }

  return (
    <div className="cadastros">
      <Aside />
      <div className="conteudo">
        <h2>Cadastro de Alunos</h2>
        {getConteudo()}
      </div>
    </div>
  );
}

export default Aluno;
