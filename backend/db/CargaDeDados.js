require('./MongoConnection.js');


const AlunoModel = require('../models/AlunoModel').AlunoModel;
const alunos = require('./jsons/alunos.json');

const EmprestimoModel = require('../models/EmprestimoModel').EmprestimoModel;
const emprestimos = require('./jsons/emprestimos.json');

const LivroModel = require('../models/LivroModel').LivroModel;
const livros = require('./jsons/livros.json');

const CategoriaModel = require('../models/CategoriaModel').CategoriaModel;
const categorias = require('./jsons/categorias.json');

async function carregar() {
  try {
    await AlunoModel.deleteMany({});
    for (const aluno of alunos) {
        await AlunoModel.create(aluno);
    }
    console.log('Alunos Carregados!');

    
    
    await LivroModel.deleteMany({});
    for (const livro of livros) {
      await LivroModel.create(livro);
    }
    console.log('Livros Carregados!');   
    await EmprestimoModel.deleteMany({});
    for (const emprestimo of emprestimos) {
        await EmprestimoModel.create(emprestimo);
    }
    console.log('Emprestimos Carregados!');


    await CategoriaModel.deleteMany({});
    for (const categoria of categorias) {
        await CategoriaModel.create(categoria);
    }
    console.log('Categorias Carregadas!');
  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
}

carregar();