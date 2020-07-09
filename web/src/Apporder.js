import React,{useState, useEffect} from 'react';
import api from './services/api';
import './global.css';
import './Apporder.css';
import './Sidebar.css';
import './Main.css';

function Apporder() {
  const[orders,setOrders] = useState([]);
  const [id,setId] = useState('');
  const [idCliente,setIdCliente] = useState('');
  const [status,setStatus] = useState('');
  const [idCardapio0,setIdCardapio0] = useState('');
  const [idCardapio1,setIdCardapio1] = useState('');
  const [idCardapio2,setIdCardapio2] = useState('');
  const [idCardapio3,setIdCardapio3] = useState('');
  const [idCardapio4,setIdCardapio4] = useState('');
  const [idQuantidade0,setIdQuantidade0] = useState('');
  const [idQuantidade1,setIdQuantidade1] = useState('');
  const [idQuantidade2,setIdQuantidade2] = useState('');
  const [idQuantidade3,setIdQuantidade3] = useState('');
  const [idQuantidade4,setIdQuantidade4] = useState('');

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
                idCardapio0,
                idQuantidade0,
                idCardapio1,
                idQuantidade1,
                idCardapio2,
                idQuantidade2,
                idCardapio3,
                idQuantidade3,
                idCardapio4,
                idQuantidade4,
                idCliente,
                status
    })
    setId('');
    setIdCliente('');
    setStatus('');
    setIdCardapio0('');
    setIdCardapio1('');
    setIdCardapio2('');
    setIdCardapio3('');
    setIdCardapio4('');
    setIdQuantidade0('');
    setIdQuantidade1('');
    setIdQuantidade2('');
    setIdQuantidade3('');
    setIdQuantidade4('');
    setOrders([]);
    const obter = await api.get('/orders');
    setOrders(obter.data);
  }
  if(acao.toLowerCase()==="deletar"){
    e.preventDefault();
    const response = await api.delete(`/orders/?id=${id}`);
    setId('');
    setIdCliente('');
    setStatus('');
    setIdCardapio0('');
    setIdCardapio1('');
    setIdCardapio2('');
    setIdCardapio3('');
    setIdCardapio4('');
    setIdQuantidade0('');
    setIdQuantidade1('');
    setIdQuantidade2('');
    setIdQuantidade3('');
    setIdQuantidade4('');
    setOrders([]);
    const obter = await api.get('/orders');
    setOrders(obter.data);
  }
  if(acao.toLowerCase()==="atualizar"){
    e.preventDefault();
    const response = await api.put(`/orders/?id=${id}&idCliente=${idCliente}&status=${status}&idCardapio0=${idCardapio0}&idCardapio1=${idCardapio1}&idCardapio2=${idCardapio2}&idCardapio3=${idCardapio3}
                            &idCardapio4=${idCardapio4}&idQuantidade0=${idQuantidade0}&idQuantidade1=${idQuantidade1}&idQuantidade2=${idQuantidade2}&idQuantidade3=${idQuantidade3}&idQuantidade4=${idQuantidade4}`);
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
            <label htmlFor="cel">Status</label>
            <input name="status" id="status" value={status} onChange={e=>setStatus(e.target.value)}/>
          </div>
          <div className="input-group">
            <div className = "input-block">
              <label htmlFor="idCardapio0">Codigo Cardapio</label>
              <input name="idCardapio0" id="idCardapio0" value={idCardapio0} onChange={e=>setIdCardapio0(e.target.value)}/> 
            </div>
            <div className = "input-block">
            <label htmlFor="idQuantidade0">Quantidade</label>
              <input name="idQuantidade0" id="idQuantidade0" value={idQuantidade0} onChange={e=>setIdQuantidade0(e.target.value)}/> 
            </div>
          </div>
          <div className="input-group">
            <div className = "input-block">
              <label htmlFor="idCardapio1">Codigo Cardapio</label>
              <input name="idCardapio1" id="idCardapio1" value={idCardapio1} onChange={e=>setIdCardapio1(e.target.value)}/> 
            </div>
            <div className = "input-block">
              <label htmlFor="idQuantidade1">Quantidade</label>
              <input name="idQuantidade1" id="idQuantidade1" value={idQuantidade1} onChange={e=>setIdQuantidade1(e.target.value)}/> 
            </div>
          </div>
          <div className="input-group">
            <div className = "input-block">
              <label htmlFor="idCardapio2">Codigo Cardapio</label>
              <input name="idCardapio2" id="idCardapio2" value={idCardapio2} onChange={e=>setIdCardapio2(e.target.value)}/> 
            </div>
            <div className = "input-block">
              <label htmlFor="idQuantidade2">Quantidade</label>
              <input name="idQuantidade2" id="idQuantidade2" value={idQuantidade2} onChange={e=>setIdQuantidade2(e.target.value)}/> 
            </div>
          </div>
          <div className="input-group">
            <div className = "input-block">
              <label htmlFor="idCardapio3">Codigo Cardapio</label>
              <input name="idCardapio3" id="idCardapio3" value={idCardapio3} onChange={e=>setIdCardapio3(e.target.value)}/> 
            </div>
            <div className = "input-block">
              <label htmlFor="idQuantidade3">Quantidade</label>
              <input name="idQuantidade3" id="idQuantidade3" value={idQuantidade3} onChange={e=>setIdQuantidade3(e.target.value)}/> 
            </div>
          </div>
          <div className="input-group">
            <div className = "input-block">
              <label htmlFor="idCardapio4">Codigo Cardapio</label>
              <input name="idCardapio4" id="idCardapio4" value={idCardapio4} onChange={e=>setIdCardapio4(e.target.value)}/> 
            </div>
            <div className = "input-block">
              <label htmlFor="idQuantidade4">Quantidade</label>
              <input name="idQuantidade4" id="idquantidade4" value={idQuantidade4} onChange={e=>setIdQuantidade4(e.target.value)}/> 
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
