require('./MongoConnection.js');

const AreaModel = require('../models/AreaModel').AreaModel;
const areas = require('./jsons/areas.json');

const LinhaModel = require('../models/LinhaModel').LinhaModel;
const linhas = require('./jsons/linhas.json');

const DisciplinaModel = require('../models/DisciplinaModel').DisciplinaModel;
const disciplinas = require('./jsons/disciplinas.json');


// NOSSO

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

    //NOSSO
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
    
    
    // PROFESSOR
    await AreaModel.deleteMany({});
    for (const area of areas) {
      await AreaModel.create(area);
    }
    console.log('Áreas carregadas!');
    
    await LinhaModel.deleteMany({});
    for (const linha of linhas) {
      await LinhaModel.create(linha);
    }
    console.log('Linhas carregadas!');
    
    
    await DisciplinaModel.deleteMany({});
    for (const disciplina of disciplinas) {
      await DisciplinaModel.create(disciplina);
    }
    console.log('Disciplinas carregadas!');
    
    // NOSSO TESTE
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
    
    
    // //Carrega as disciplinas nos cursos
    // for (const disciplina of disciplinas){
      //   for (const idCurso of disciplina.cursos){
        //     const curso = await CursoModel.findOne({'_id': idCurso});
        //     curso.disciplinas.push(disciplina);
    //     await CursoModel.findByIdAndUpdate({'_id': idCurso}, curso);
    //   } 
    // }

  } catch (err) {
    console.log(err);
  } finally {
    process.exit();
  }
}

carregar();