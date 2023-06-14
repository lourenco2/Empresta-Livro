import imgInicial from './Library-amico.png'
function Home() {
  return (
    <div id="principal">
      <h3 id='welcome'>Bem Vindo</h3>
        <img id='imgInicial' src={imgInicial} alt="imagem inicial"></img>
    </div>

  );
}

export default Home;
