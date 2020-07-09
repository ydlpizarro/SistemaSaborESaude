import React,{useState, useEffect} from 'react';
import api from './services/api';
import './global.css';
import './Apporder.css';
import './Sidebar.css';
import './Main.css';

function Apporder() {
  const[orders,setOrders] = useState([]);
  const [id,setId] = useState('');
  const [pedido,setPedido] = useState([]);
  const [idCliente,setIdCliente] = useState('');
  const [status,setStatus] = useState('');
  const [acao,setAcao] =useState('');

useEffect(()=>{
  async function loadOrders(){
    const response = await api.get('/orders');
    setOrders(response.data);
  } 
  loadOrders();
},[]);

async function handleAddOrder(e){
  if(acao.toLowerCase()==="cadastrar"){
    e.preventDefault();
    const response = await api.post('/orders',{
      id,
      pedido,
      idCliente,
      status
    })
    setId('');
    setPedido([]);
    setIdCliente('');
    setStatus('');
    setOrders([]);
    const obter = await api.get('/orders');
    setOrders(obter.data);
  }
  if(acao.toLowerCase()==="deletar"){
    e.preventDefault();
    const response = await api.delete(`/orders/?id=${id}`);
    setId('');
    setPedido([]);
    setIdCliente('');
    setStatus('');
    setOrders([]);
    const obter = await api.get('/orders');
    setOrders(obter.data);
  }
  if(acao.toLowerCase()==="atualizar"){
    e.preventDefault();
    const response = await api.put(`/orders/?id=${id}&pedido=${pedido}&idCliente=${idCliente}&status=${status}`);
    const obter = await api.get('/orders');
    setOrders(obter.data);
  }
  if(acao.toLowerCase()==="pesquisar"){
    e.preventDefault();
    const response = await api.get(`/searchorders/?&id=${id}`);
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
            <label htmlFor="cel">Código Cliente</label>
            <input name="idCliente" id="idCliente" value={idCliente} onChange={e=>setIdCliente(e.target.value)}/>
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
          {orders.map(order=>(
          <li key={order._id} className="cliente-item">
            <header>
              <div className="user-info">
                <strong>Código de Pedido {order.id}</strong>
                <span>Código de Cliente: {order.idCliente}</span> <br/>
                           
              </div>
            </header>
            
          </li>))}
        </ul>
      </main>
    </div>
  );

}

export default Apporder;
