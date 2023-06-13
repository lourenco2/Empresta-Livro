import "./Cadastros.css";
import axios from "axios";
import Aside from "../layout/Aside";
import { useState, useEffect } from "react";

function Livro() {
  // Entidades e listas utilizadas na página
  const [livro, setLivro] = useState(null);
  const [livros, setLivros] = useState([]);
  const [categorias, setCategorias] = useState([]);

  // Funções de carregamento de dados do backend
  function getLivros() {
    axios.get("http://localhost:3005/livro").then((resposta) => {
      setLivros(resposta.data);
    });
  }

  function getCategorias() {
    axios.get("http://localhost:3005/categoria").then((resposta) => {
      setCategorias(resposta.data);
    });
  }

  useEffect(() => {
    getLivros();
    getCategorias();
  }, []);

  // Funções para manipulação da entidade principal
  function novoLivro() {
    setLivro({
      titulo: "",
      categoria: "",
      sinopse: "",
      autor: "",
      quantidade: "",
    });
  }

  function alterarLivro(campo, valor, id) {
    setLivro({
      _id: id,
      [campo]: valor,
    });
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLivro((livroAtual) => ({
      ...livroAtual,
      [name]: value,
    }));
  };

  function excluirLivro(id) {
    axios.delete("http://localhost:3005/livro/" + id).then(() => {
      reiniciarEstadoDosObjetos();
    });
  }

  function salvarLivro() {
    if (livro._id) {
      axios.put("http://localhost:3005/livro/" + livro._id, livro).then(() => {
        reiniciarEstadoDosObjetos();
      });
    } else {
      axios.post("http://localhost:3005/livro", livro).then(() => {
        reiniciarEstadoDosObjetos();
      });
    }
  }

  function reiniciarEstadoDosObjetos() {
    setLivro(null);
    getLivros();
  }

  // Função para geração do formulário
  function getFormulario() {
    return (
      <form>
        <label>Titulo:</label>
        <input
          type="text"
          name="titulo"
          value={livro.titulo}
          onChange={handleInputChange}
        />
        <label>Categoria:</label>
        <select
          name="categoria"
          value={livro.categoria}
          onChange={handleInputChange}
        >
          <option value="">Selecione a categoria</option>
          {categorias.map((categoria) => (
            <option key={categoria._id} value={categoria.categoria}>
              {categoria.categoria}
            </option>
          ))}
        </select>
        <label>Sinopse:</label>
        <input
          type="text"
          name="sinopse"
          value={livro.sinopse}
          onChange={handleInputChange}
        />
        <label>Autor:</label>
        <input
          type="text"
          name="autor"
          value={livro.autor}
          onChange={handleInputChange}
        />
        <label>Quantidade:</label>
        <input
          type="text"
          name="quantidade"
          value={livro.quantidade}
          onChange={handleInputChange}
        />
        <button type="button" onClick={salvarLivro}>
          Salvar
        </button>
        <button type="button" onClick={() => setLivro(null)}>
          Cancelar
        </button>
      </form>
    );
  }

  // Funções para geração da tabela
  function getLinhaDaTabela(livro) {
    return (
      <tr key={livro._id}>
        <td>{livro.titulo}</td>
        <td>{livro.categoria}</td>
        <td>{livro.sinopse}</td>
        <td>{livro.autor}</td>
        <td>{livro.quantidade}</td>
        <td>
          <button
            type="button" id="margemBotao"
            onClick={() => {
              if (
                window.confirm(
                  "Confirmar a exclusão da área " + livro.titulo + "?"
                )
              ) {
                excluirLivro(livro._id);
              }
            }}
          >
            Excluir
          </button>
          <button
            type="button" id="margemBotao"
            onClick={() => {
              setLivro(livro);
            }}
          >
            Editar
          </button>
        </td>
      </tr>
    );
  }

  function getLinhasDaTabela() {
    const linhasDaTabela = [];
    for (let i = 0; i < livros.length; i++) {
      const livro = livros[i];
      linhasDaTabela[i] = getLinhaDaTabela(livro);
    }
    return linhasDaTabela;
  }

  function getTabela() {
    return (
      <table id="TamanhoTabelaGeral">
        <tbody>
          <tr>
            <th>Titulo</th>
            <th>Categoria</th>
            <th>Sinopse</th>
            <th>Autor</th>
            <th>Quantidade</th>
            <th id="TamanhoTabelaAcao">Ações</th>
          </tr>
          {getLinhasDaTabela()}
        </tbody>
      </table>
    );
  }

  // Função do conteúdo principal
  function getConteudo() {
    if (livro == null) {
      return (
        <>
          <button id="botaoCadastro"
            type="button"
            onClick={() => {
              novoLivro();
            }}
          >
            Novo Livro
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
        <h2 id="CadLivro">Cadastro de Livros</h2>
        {getConteudo()}
      </div>
    </div>
  );
}

export default Livro;
