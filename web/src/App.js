import React from 'react';
import './global.css';
import './App.css';
import './Sidebar.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="name">Nome</label>
            <input name="name" id="name" />
          </div>
          <div className="input-block">
            <label htmlFor="cel">Celular</label>
            <input name="cel" id="cel" />
          </div>
          <div className="input-block">

            <label htmlFor="endereco">Endereço</label>
            <input name="endereco" id="endereco" />
          </div>
          <div className="input-block">

            <label htmlFor="tax">Taxa de Entrega</label>
            <input name="tax" id="tax" />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="cliente-item">
          </li>
        </ul>
      </main>
    </div>
  )

}

export default App;
