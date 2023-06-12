import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './paginas/Home';
import Cadastros from './paginas/Cadastros';
import Livro from './paginas/Livro';
import Linhas from './paginas/Linhas';
import Util from './paginas/Util';
import Sobre from './paginas/Sobre';
import Aluno from './paginas/Aluno';
import Categoria from './paginas/Categoria';
import Emprestimo from './paginas/Emprestimo';
import ListaEmprestimos from './paginas/ListaEmprestimos';

function App() {
  return (
    <>
      <Routes>
          <Route path='/' element={<Layout><Home/></Layout>} />
          <Route path='/cadastros' element={<Layout><Cadastros/></Layout>} />   
          <Route path='/livro' element={<Layout><Livro/></Layout>} />        
          <Route path='/linhas' element={<Layout><Linhas/></Layout>} />        
          <Route path='/aluno' element={<Layout><Aluno/></Layout>} />
          <Route path='/emprestimo' element={<Layout><Emprestimo/></Layout>} />
          <Route path='/historico' element={<Layout><ListaEmprestimos/></Layout>} />
          <Route path='/categoria' element={<Layout><Categoria/></Layout>} />

      </Routes>     
    </>
  );
}
export default App;
