import { NavLink } from 'react-router-dom';

function Nav(){
return (
    <nav>
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/livro">Cadastros</NavLink></li>
        <li><NavLink to="/emprestimo">Fazer Emprestimo</NavLink></li>
        <li><NavLink to="/historico">Historico</NavLink></li>
    </ul>
    </nav>
  );
}

export default Nav;