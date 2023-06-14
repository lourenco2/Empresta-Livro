import { NavLink } from 'react-router-dom';
import imgInicial from "../paginas/icon.png";

function Nav(){
return (
    <nav>
    <ul>
        <li><NavLink to="/"><img id='homeIcon' src={imgInicial} alt="home"></img></NavLink></li>
        <li><NavLink to="/livro">Cadastros</NavLink></li>
        <li><NavLink to="/emprestimo">Fazer Emprestimo</NavLink></li>
        <li><NavLink to="/historico">Historico</NavLink></li>
    </ul>
    </nav>
  );
}

export default Nav;