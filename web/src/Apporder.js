import React,{useState, useEffect} from 'react';
import api from './services/api';
import './global.css';
import './Apporder.css';
import './Sidebar.css';
import './Main.css';

function Apporder() {
  const[orders,setOrders] = useState([]);
  const [id,setId] = useState('');
  const [idcliente,setIdCliente] = useState('');
  const [status,setStatus] = useState('');
  const [idcardapio,setIdCardapio] = useState('');
  const [idquantidade,setIdQuantidade] = useState('');
  const [acao,setAcao] =useState('');

useEffect(()=>{
  async function loadOrders(){
    const response = await api.get('/pedidos');
    setOrders(response.data);
  } 
  loadOrders();
},[]);

async function handleAddOrder(e){
  if(acao.toLowerCase()==="cadastrar"){
    e.preventDefault();
    const response = await api.post('/pedidos',{
     id,
     idcliente,
     idcardapio,
     idquantidade,
     status
    })
    setId('');
    setIdCliente('');
    setStatus('');
    setIdCardapio('');
    setIdQuantidade('');
    setOrders([]);
    const obter = await api.get('/pedidos');
    setOrders(obter.data);
  }
  if(acao.toLowerCase()==="deletar"){
    e.preventDefault();
    const response = await api.delete(`/pedidos/?id=${id}`);
    setId('');
    setIdCliente('');
    setStatus('');
    setIdCardapio('');
    setIdQuantidade('');
    setOrders([]);
    const obter = await api.get('/pedidos');
    setOrders(obter.data);
  }
  if(acao.toLowerCase()==="atualizar"){
    e.preventDefault();
    const response = await api.put(`/pedidos/?id=${id}&idcliente=${idcliente}&status=${status}&idcardapio0=${idcardapio}&idquantidade=${idquantidade}`);
    const obter = await api.get('/pedidos');
    setOrders(obter.data);
  }
  if(acao.toLowerCase()==="pesquisar"){
    e.preventDefault();
    const response = await api.get(`/searchpedidos/?&id=${id}`);
    setOrders(response.data);
  }
};
  return (
    <div id="apporder">
      <aside>
        <strong>Pedidos </strong>
        <form onSubmit={handleAddOrder}>
          <div className="input-block">
            <label htmlFor="id">Código do Pedido</label>
            <input name="id" id="id" required value={id} onChange={e=>setId(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="idcliente">Código Cliente</label>
            <input name="idcliente" id="idcliente" value={idcliente} onChange={e=>setIdCliente(e.target.value)}/>
          </div>

          <div className="input-block">
            <label htmlFor="status">Status</label>
            <input name="status" id="status" value={status} onChange={e=>setStatus(e.target.value)}/>
          </div>
          <div className="input-group">
            <div className = "input-block">
              <label htmlFor="idcardapio">Codigo Cardapio</label>
              <input name="idcardapio" id="idcardapio" value={idcardapio} onChange={e=>setIdCardapio(e.target.value)}/> 
            </div>
            <div className = "input-block">
            <label htmlFor="idquantidade">Quantidade</label>
              <input name="idquantidade" id="idquantidade" value={idquantidade} onChange={e=>setIdQuantidade(e.target.value)}/> 
            </div>
          </div>
          
          <div className="input-block">
            <label htmlFor="acao">Ação</label>
            <input name="acao" id="acao" value={acao} onChange={e=>setAcao(e.target.value)}/>
          </div>
          <button type="submit">Executar</button>
        </form>
      </aside>
      <main>
        <ul>
          {orders.map(order=>(
          <li key={order._id} className="cliente-item">
            <header>
              <div className="user-info">
                <strong>Código de Pedido {order.id}</strong>
                <span>Código de Cliente: {order.idcliente}</span> <br/>
                           
              </div>
            </header>
            
          </li>))}
        </ul>
      </main>
    </div>
  );

}

export default Apporder;
