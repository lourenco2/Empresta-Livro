import { NavLink } from "react-router-dom";

function Aside() {
  return (
    <aside className="menu-lateral">
      <ul>
        <li>
          <NavLink to="/cadastros">Áreas</NavLink>
        </li>
        <li>
          <NavLink to="/atitudes">Atitudes</NavLink>
        </li>
        <li>
          <a>Atividades</a>
        </li>
        <li>
          <a>Aulas</a>
        </li>
        <li>
          <a>Bibliografias</a>
        </li>
        <li>
          <a>Competências</a>
        </li>
        <li>
          <a>Conteúdos</a>
        </li>
        <li>
          <a>Cursos</a>
        </li>
        <li>
          <a>DCNs</a>
        </li>
        <li>
          <a>Diretrizes</a>
        </li>
        <li>
          <a>Disciplinas</a>
        </li>
        <li>
          <a>Habilidades</a>
        </li>
        <li>
          <NavLink to="/linhas">Linhas</NavLink>
        </li>
        <li>
          <a>Níveis</a>
        </li>
        <li>
          <a>Perfis</a>
        </li>
        <li>
          <a>Professores</a>
        </li>
        <li>
          <a>Usuários</a>
        </li>
      </ul>
    </aside>
  );
}

export default Aside;
