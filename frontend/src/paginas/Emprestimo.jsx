import "./Cadastros.css";
import axios from "axios";
import Aside from "../layout/Aside";
import { useState, useEffect } from "react";


function Emprestimo () {

    const [alunos, setAlunos] = useState([]);
    const [livros, setLivros] = useState([]);
    const [selectedAluno, setSelectedAluno] = useState('');
    const [selectedLivro, setSelectedLivro] = useState('');
  
    useEffect(() => {
      carregarAlunos();
      carregarLivros();
    }, []);
  
    function carregarAlunos() {
      axios.get('http://localhost:3005/aluno').then((resposta) => {
        setAlunos(resposta.data);
      });
    }
  
    function carregarLivros() {
      axios.get('http://localhost:3005/livro').then((resposta) => {
        const livrosComQuantidade = resposta.data.filter((livro) => livro.quantidade > 0);
        const livrosAtualizados = livrosComQuantidade.map((livro) => ({
          ...livro,
          quantidade: livro.quantidade > 0 ? livro.quantidade : 0
        }));
    
        setLivros(livrosAtualizados);
      });
    }
  
    function cadastrarEmprestimo() {
      if (!selectedAluno || !selectedLivro) {
        alert('Por favor, selecione um aluno e um livro.');
        return;
      }
  
      axios
        .post('http://localhost:3005/emprestimo', {
          id_aluno: selectedAluno._id,
          id_livro: selectedLivro._id,
          codigolivro: selectedLivro.codigolivro
        })
        .then(() => {
          alert('Empréstimo realizado com sucesso!');
          // Diminuir a quantidade de livros
          axios
            .put(`http://localhost:3005/livro/${selectedLivro._id}`, {
              ...selectedLivro,
              quantidade: selectedLivro.quantidade - 1
            })
            .then(() => {
              carregarLivros();
              setSelectedAluno('');
              setSelectedLivro('');
            })
            .catch((error) => {
              console.error('Erro ao atualizar quantidade de livros:', error);
              alert('Ocorreu um erro ao atualizar a quantidade de livros.');
            });
        })
        .catch((error) => {
          console.error('Erro ao realizar empréstimo:', error);
          alert('Ocorreu um erro ao realizar o empréstimo.');
        });
    }
  
    function handleAlunoChange(event) {
      const alunoSelecionado = alunos.find((aluno) => aluno.nome === event.target.value);

      setSelectedAluno(alunoSelecionado);
    }
  
    function handleLivroChange(event) {
      const livroSelecionado = livros.find((livro) => livro.titulo === event.target.value);
      setSelectedLivro(livroSelecionado);
    }
  
    return (
      <div>
        <h3 id="CadLivro">Empréstimo de Livro</h3>
        <form>
          <label id="cadCategoria">Aluno</label>
          <select id="BotaoEmprestimo" value={selectedAluno ? selectedAluno.nome : ''} onChange={handleAlunoChange}>
            <option value="" id="ListaEmprestimo">Selecione um aluno</option>
            {alunos.map((aluno) => (
              <option id="ListaEmprestimo" key={aluno._id} value={aluno.nome}>
                {aluno.nome}
              </option>
            ))}
          </select>
  
          <label id="cadCategoria">Livro</label>
          <select id="BotaoEmprestimo" value={selectedLivro ? selectedLivro.titulo : ''} onChange={handleLivroChange}>
            <option value="" id="ListaEmprestimo">Selecione um livro</option>
            {livros.map((livro) => (
              <option id="ListaEmprestimo" key={livro._id} value={livro.titulo}>
                {livro.titulo}
              </option>
            ))}
          </select>
  
          <button type="button" id="BotaoEmprestimoRealizado" onClick={cadastrarEmprestimo}>
            +
          </button>
        </form>
      </div>
    );
  }



export default Emprestimo