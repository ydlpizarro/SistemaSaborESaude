import React,{useState, useEffect} from 'react';
import api from './services/api';
import './global.css';
import './Appstock.css';
import './Sidebar.css';
import './Main.css';

function Appstock() {
  const[stocks,setStocks] = useState([]);
  const [id,setId] = useState('');
  const [quantidade,setQuantidade] = useState('');
  const [status,setStatus] = useState('');
  const [acao,setAcao] =useState('');

useEffect(()=>{
  async function loadStocks(){
    const response = await api.get('/stocks');
    setStocks(response.data);
  } 
  loadStocks();
},[]);

async function handleAddStock(e){
  if(acao.toLowerCase()==="cadastrar"){
    e.preventDefault();
    const response = await api.post('/stocks',{
      id,
      quantidade,
      status
    })
    setId('');
    setQuantidade('');
    setStatus('');
    setStocks([]);
    const obter = await api.get('/stocks');
    setStocks(obter.data);
  }
  if(acao.toLowerCase()==="deletar"){
    e.preventDefault();
    const response = await api.delete(`/stocks/?id=${id}`);
    setId('');
    setQuantidade('');
    setStatus('');
    setStocks([]);
    const obter = await api.get('/stocks');
    setStocks(obter.data);
  }
  if(acao.toLowerCase()==="atualizar"){
    e.preventDefault();
    const response = await api.put(`/stocks/?id=${id}&quantidade=${quantidade}&status=${status}`);
    const obter = await api.get('/stocks');
    setStocks(obter.data);
  }
  if(acao.toLowerCase()==="pesquisar"){
    e.preventDefault();
    const response = await api.get(`/searchstocks/?&id=${id}`);
    setStocks(response.data);
  }
};
  return (
    <div id="appstock">
      <aside>
        <strong>Stock</strong>
        <form onSubmit={handleAddStock}>
          <div className="input-block">
            <label htmlFor="id">Código</label>
            <input name="id" id="id" required value={id} onChange={e=>setId(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="cel">Quantidade</label>
            <input name="quantidade" id="quantidade" value={quantidade} onChange={e=>setQuantidade(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="endereco">Status</label>
            <input name="status" id="status" value={status} onChange={e=>setStatus(e.target.value)}/>
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
          {stocks.map(stock=>(
          <li key={stock._id} className="cliente-item">
            <header>
              <div className="user-info">
                
                <span>Código: {stock.id}</span> <br/>
                <span>Quantidade: {stock.quantidade}</span>  <br/>
                <span>Status: {stock.status}</span>               
              </div>
            </header>
          </li>))}
        </ul>
      </main>
    </div>
  );

}

export default Appstock;
