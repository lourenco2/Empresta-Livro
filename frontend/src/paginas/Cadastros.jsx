import "./Cadastros.css";
import axios from "axios";
import Aside from "../layout/Aside";
import { useState, useEffect } from "react";

function Cadastros() {
  //Entidades e listas utilizadas na página
  const [area, setArea] = useState(null);
  const [areas, setAreas] = useState([]);

  //Funções de carregamento de dados do backend
  function getAreas() {
    axios.get("http://localhost:3005/areas").then((resposta) => {
      setAreas(resposta.data);
    });
  }

  useEffect(() => {
    getAreas();
  }, []);

  //Funções para manipulação da entidade principal
  function novaArea() {
    setArea({
      descricao: "",
    });
  }

  function alterarArea(campo, valor, id) {
    setArea({
      _id: id,
      [campo]: valor,
    });
  }

  function excluirArea(id) {
    axios.delete("http://localhost:3005/areas/" + id).then(() => {
      reiniciarEstadoDosObjetos();
    });
  }

  function salvarArea() {
    if (area._id) {
      axios.put("http://localhost:3005/areas/" + area._id, area).then(() => {
        reiniciarEstadoDosObjetos();
      });
    } else {
      axios.post("http://localhost:3005/areas", area).then(() => {
        reiniciarEstadoDosObjetos();
      });
    }
  }

  function reiniciarEstadoDosObjetos() {
    setArea(null);
    getAreas();
  }

  //Função para geração do formulário
  function getFormulario() {
    return (
      <form>
        <label>Descrição</label>
        <input
          type="text"
          name="descricao"
          value={area.descricao}
          onChange={(e) => {
            alterarArea(e.target.name, e.target.value, area._id);
          }}
        />
        <button
          type="button"
          onClick={() => {
            salvarArea();
          }}
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={() => {
            setArea(null);
          }}
        >
          Cancelar
        </button>
      </form>
    );
  }

  //Funções para geração da tabela
  function getLinhaDaTabela(area) {
    return (
      <tr key={area._id}>
        <td>{area._id}</td>
        <td>{area.descricao}</td>
        <td>
          <button
            type="button"
            onClick={() => {
              if (
                window.confirm(
                  "Confirmar a exclusão da área " + area.descricao + "?"
                )
              ) {
                excluirArea(area._id);
              }
            }}
          >
            Excluir
          </button>
          <button
            type="button"
            onClick={() => {
              setArea(area);
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
    for (let i = 0; i < areas.length; i++) {
      const area = areas[i];
      linhasDaTabela[i] = getLinhaDaTabela(area);
    }
    return linhasDaTabela;
  }

  function getTabela() {
    return (
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Ações</th>
          </tr>
          {getLinhasDaTabela()}
        </tbody>
      </table>
    );
  }

  //Função do conteúdo principal
  function getConteudo() {
    if (area == null) {
      return (
        <>
          <button
            type="button"
            onClick={() => {
              novaArea();
            }}
          >
            Nova área
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
        <h2>Cadastro de áreas</h2>
        {getConteudo()}
      </div>
    </div>
  );
}

export default Cadastros;
