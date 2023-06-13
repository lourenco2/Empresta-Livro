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
      </ul>
    </aside>
  );
}

export default Aside;
