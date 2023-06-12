import { NavLink } from "react-router-dom";

function Aside() {
  return (
    <aside className="menu-lateral">
      <ul>
        <li>
          <NavLink to="/livro">Livros</NavLink>
        </li>
        <li>
        <NavLink to="/aluno">Alunos</NavLink>
        </li>
        <li>
        <NavLink to="/categoria">Categoria</NavLink>
        </li>
       
        <li>
          <NavLink to="/cadastros">Áreas</NavLink>
        </li>
        <li>
          <NavLink to="/linhas">Linhas</NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
