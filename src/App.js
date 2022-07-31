import './App.css';

function App() {
  return (
    <div className='container'>
      <header>
        <p>Primeiro projeto com React JS</p>
      </header>
      <main>
        <section className='box-titulo'>
          <h1>React JS</h1>
          <p>Acesse o site para biblioteca completa!</p>
          <a href="https://reactjs.org/" target="_blank">Site Oficial</a>
        </section>
        <section className='box-requisitos'>
            <h2>Requisitos:</h2>
            <p>Abaixo estao os requisitos minimos para aprender React JS:</p>
            <div className='box-cards'>
              <div className='card'>
                  <h3>HTML</h3>
                  <p>Componente base da web que permite construir a estrutura da pagina </p>
              </div>
              <div className='card'>
                    <h3>CSS</h3>
                    <p>Estiliza paginas web para melhor visualizaçao das paginas web</p>
              </div>
              <div className='card'>
                    <h3>JavaScript</h3>
                    <p>Linguagem que traz interatividade e dinamismo aos sites </p>
              </div>

            </div>
        </section>
      </main>
      <footer>
          <p className='direitos'>© Direitos Reservados de ninguem</p>
      </footer>

    </div>
    
  );
}

export default App;
