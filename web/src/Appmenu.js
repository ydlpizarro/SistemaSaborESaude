import React,{useState, useEffect} from 'react';
import api from './services/api';
import './global.css';
import './Appmenu.css';
import './Sidebar.css';
import './Main.css';

function Appmenu() {
  const[menus,setMenus] = useState([]);
  const [id,setId] = useState('');
  const [name,setName] = useState('');
  const [calorias,setCalorias] = useState('');
  const [valor,setValor] = useState('');
  const [status,setStatus] = useState('');
  const [acao,setAcao] =useState('');

useEffect(()=>{
  async function loadMenus(){
    const response = await api.get('/menus');
    setMenus(response.data);
  } 
  loadMenus();
},[]);

async function handleAddMenu(e){
  if(acao.toLowerCase()==="cadastrar"){
    e.preventDefault();
    const response = await api.post('/menus',{
      id,
      name,
      calorias,
      valor,
      status
    })
    setId('');
    setName('');
    setCalorias('');
    setValor('');
    setStatus('');
    setMenus([]);
    const obter = await api.get('/menus');
    setMenus(obter.data);
  }
  if(acao.toLowerCase()==="deletar"){
    e.preventDefault();
    const response = await api.delete(`/menus/?id=${id}`);
    setId('');
    setName('');
    setCalorias('');
    setValor('');
    setStatus('');
    setMenus([]);
    const obter = await api.get('/menus');
    setMenus(obter.data);
  }
  if(acao.toLowerCase()==="atualizar"){
    e.preventDefault();
    const response = await api.put(`/menus/?id=${id}&name=${name}&calorias=${calorias}&valor=${valor}&status=${status}`);
    const obter = await api.get('/menus');
    setMenus(obter.data);
  }
  if(acao.toLowerCase()==="pesquisar"){
    e.preventDefault();
    const response = await api.get(`/searchmenus/?&name=${name}`);
    setMenus(response.data);
  }
};
  return (
    <div id="appmenu">
      <aside>
        <strong>Cardápio</strong>
        <form onSubmit={handleAddMenu}>
          <div className="input-block">
            <label htmlFor="name">Nome</label>
            <input name="name" id="name" value={name} onChange={e=>setName(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="id">Código</label>
            <input name="id" id="id" required value={id} onChange={e=>setId(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="calorias">Calorias</label>
            <input name="calorias" id="calorais" value={calorias} onChange={e=>setCalorias(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="valor">Preço</label>
            <input name="valor" id="valor" value={valor} onChange={e=>setValor(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="status">Status do prato</label>
            <input name="status" id="status" value={status} onChange={e=>setStatus(e.target.value)}/>
          </div>
          <div className="input-block">
            <label htmlFor="acao">Ação</label>
            <input name="acao" id="acao" value={acao} onChange={e=>setAcao(e.target.value)}/>
          </div>
          <button type="submit">Executar</button>
        </form>
      </aside>
      <main>
        <ul className="menu-ul">
          {menus.map(menu=>(
          <li key={menu._id} className="menu-item">
            <header>
              <div className="menu-info">
                <strong>{menu.name}</strong>
                <span>Código: {menu.id}</span> <br/>                
                <span>Preço: R${menu.valor}</span>  <br/>
                <span>Status: {menu.status}</span>               
              </div>
            </header>
            <p>{menu.calorias} KCal</p>            
          </li>))}
        </ul>
      </main>
    </div>
  );

}

export default Appmenu;
