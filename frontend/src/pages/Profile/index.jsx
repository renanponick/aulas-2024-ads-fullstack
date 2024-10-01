import { useContext, useEffect, useState } from 'react'
import './styles.css'
import { AuthContext } from '../../auth/Context'
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const { token, logout } = useContext(AuthContext);
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [updNome, setUpdNome] = useState('');
  const [updEmail, setUpdEmail] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();

  async function carregarPerfil() {
    var requestOptions = {
      headers: {
        authorization: token
      },
      method: 'GET',
      redirect: 'follow',
    };
    
    const response = await fetch(
      `http://localhost:3000/api/v1/user/context`,
      requestOptions
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
  
    if(data.id) {
      setId(data.id)
      setNome(data.nome)
      setEmail(data.email)
    }
  }

  const handleSaveUpdate = async () => {
    const body = JSON.stringify({ nome: updNome, email: updEmail })
    const headers = { 'Content-Type': 'application/json', 'Authorization': token }
    const method = 'PUT'
  
    const apiResponse = await fetch(
      `http://localhost:3000/api/v1/user/${id}`,
      { method, headers, body }
    )

    if(apiResponse.ok){
      setNome(updNome)
      setEmail(updEmail)
      setIsUpdate(false)
    }
  }

  const handleClickUpdate = () => {
    setIsUpdate(true)
    setUpdNome(nome)
    setUpdEmail(email)
  }

  const handleClickDelete = async () => {
    const response = prompt("Para confirmar exclusão digite seu email:")

    if(response === email) {
      const headers = { 'Content-Type': 'application/json', 'Authorization': token }
      const method = 'DELETE'
    
      const apiResponse = await fetch(
        `http://localhost:3000/api/v1/user/${id}`,
        { method, headers }
      )

      if(apiResponse.ok){
        logout()
        navigate('/')
      }
    } else {
      alert("Nome Inválido, processo cancelado.")
    }
  }

  useEffect(() => {
    async function getConteudo() {
        carregarPerfil()
    }
    getConteudo()
  }, [])

  return (
    <div className='profile'>
      <div className='info'>
        <h1>Dados do seu perfil</h1>
        <p>Nome: {!isUpdate ? nome: <input type='text' id="nome" value={updNome} onChange={(e) => setUpdNome(e.target.value)}/>} </p>
        <p>Email: {!isUpdate ? email : <input type='email' id="email" value={updEmail} onChange={(e) => setUpdEmail(e.target.value)}/>} </p>
        {
        !isUpdate ? 
          <div className='actions'>
            <button
              onClick={handleClickDelete}
            >Excluir Conta</button>
            <button
              className='primary'
              onClick={handleClickUpdate}
            >Alterar Dados</button>
          </div>
        : <div className='actions'>
            <button
              onClick={() => setIsUpdate(false)}
            >Cancelar</button>
            <button
              className='primary'
              onClick={handleSaveUpdate}
            >Salvar</button>
          </div>
        }
      </div>
    </div>
  )
}
