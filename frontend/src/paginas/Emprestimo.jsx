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
        <h2>Empréstimo de Livro</h2>
        <form>
          <label>Aluno:</label>
          <select value={selectedAluno ? selectedAluno.nome : ''} onChange={handleAlunoChange}>
            <option value="">Selecione um aluno</option>
            {alunos.map((aluno) => (
              <option key={aluno._id} value={aluno.nome}>
                {aluno.nome}
              </option>
            ))}
          </select>
  
          <label>Livro:</label>
          <select value={selectedLivro ? selectedLivro.titulo : ''} onChange={handleLivroChange}>
            <option value="">Selecione um livro</option>
            {livros.map((livro) => (
              <option key={livro._id} value={livro.titulo}>
                {livro.titulo}
              </option>
            ))}
          </select>
  
          <button type="button" onClick={cadastrarEmprestimo}>
            Realizar Empréstimo
          </button>
        </form>
      </div>
    );
  }



export default Emprestimo