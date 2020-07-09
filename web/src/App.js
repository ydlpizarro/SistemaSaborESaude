import React,{useState, useEffect} from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  const[clients,setClients] = useState([]);
  const [id,setId] = useState('');
  const [name,setName] = useState('');
  const [cel,setCel] = useState('');
  const [endereco,setEndereco] = useState('');
  const [tax,setTax] = useState('');
  const [acao,setAcao] =useState('');

useEffect(()=>{
  async function loadClients(){
    const response = await api.get('/clientes');
    setClients(response.data);
  } 
  loadClients();
},[]);

async function handleAddClient(e){
  if(acao.toLowerCase()==="cadastrar"){
    e.preventDefault();
    const response = await api.post('/clientes',{
      id,
      name,
      cel,
      endereco,
      tax
    })
    setId('');
    setName('');
    setCel('');
    setEndereco('');
    setTax('');
    setClients([]);
    const obter = await api.get('/clientes');
    setClients(obter.data);
  }
  if(acao.toLowerCase()==="deletar"){
    e.preventDefault();
    const response = await api.delete(`/clientes/?id=${id}`);
    setId('');
    setName('');
    setCel('');
    setEndereco('');
    setTax('');
    setClients([]);
    const obter = await api.get('/clientes');
    setClients(obter.data);
  }
  if(acao.toLowerCase()==="atualizar"){
    e.preventDefault();
    const response = await api.put(`/clientes/?id=${id}&name=${name}&cel=${cel}&endereco=${endereco}&tax=${tax}`);
    const obter = await api.get('/clientes');
    setClients(obter.data);
  }
  if(acao.toLowerCase()==="pesquisar"){
    e.preventDefault();
    const response = await api.get(`/searchclientes/?&name=${name}`);
    setClients(response.data);
  }
};
  return (
    <div id="app">
      <aside>
        <strong>Clientes</strong>
        <form onSubmit={handleAddClient}>
          <div className="input-block">
            <label htmlFor="name">Nome</label>
            <input name="name" id="name" value={name} onChange={e=>setName(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="id">Código</label>
            <input name="id" id="id" required value={id} onChange={e=>setId(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="cel">Celular</label>
            <input name="cel" id="cel" value={cel} onChange={e=>setCel(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="endereco">Endereço</label>
            <input name="endereco" id="endereco" value={endereco} onChange={e=>setEndereco(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="tax">Taxa de Entrega</label>
            <input name="tax" id="tax" value={tax} onChange={e=>setTax(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="acao">Ação</label>
            <input name="tax" id="acao" value={acao} onChange={e=>setAcao(e.target.value)}/>
          </div>
          <button type="submit">Executar</button>
        </form>
      </aside>
      <main>
        <ul>
          {clients.map(client=>(
          <li key={client._id} className="cliente-item">
            <header>
              <div className="user-info">
                <strong>{client.name}</strong>
                <span>Código: {client.id}</span> <br/>
                <span>Celular: {client.cel}</span>  <br/>
                <span>Taxa: {client.tax}</span>               
              </div>
            </header>
            <p>{client.endereco}</p>            
          </li>))}
        </ul>
      </main>
    </div>
  );

}

export default App;
