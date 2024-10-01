import { useContext, useState } from 'react'
import './styles.css'
import { AuthContext } from '../../auth/Context'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const icon = "https://freesvg.org/img/abstract-user-flat-1.png"

export default function Character() {
  const location = useLocation();
  const { isUpdate, personagem: char } = location.state || {}
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [personagem, setPersonagem] = useState(char || {
    id: '', name: '', status: '', gender: '', species: '', image: null
  })

  const goBack = () => navigate("/api")

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPersonagem({
        ...personagem,
        [id]: value
    });
  };

  const handleAddSave = async () => {
      const body = JSON.stringify({ ...personagem })
      const headers = { 'Content-Type': 'application/json', 'Authorization': token }
      const method = isUpdate ? 'PUT' : 'POST'
    
      const apiResponse = await fetch(
        `http://localhost:3000/api/v1/character/${personagem.id}`,
        { method, headers, body }
      )

      if(apiResponse.ok){
        navigate('/api')
      }
      if(apiResponse.status == 403) {
        toast("Você não ter permissão para realizar esta ação.");
        navigate('/api')
      }
  }

  const handleDelete = async () => {
    try {
      const response = prompt('Para deletar digite o nome do personagem')
      if(response === personagem.name) {
        const headers = { 'Content-Type': 'application/json', 'Authorization': token }
        const method = 'DELETE'
      
        const apiResponse = await fetch(
          `http://localhost:3000/api/v1/character/${personagem.id}`,
          { method, headers }
        )

        if(apiResponse.ok){
          navigate('/api')
        }
        if(apiResponse.status == 403) {
          toast("Você não ter permissão para realizar esta ação.");
          navigate('/api')
        }
      } else {
        toast("Nome Inválido, processo cancelado.");
      }
        
    } catch (error) {
      toast("Sem permissão.");
    }
  }

  return (
    <div className='character'>
      <div className='character-info'>
        <img src={ personagem.image ? personagem.image : icon } alt="personagem" />
        <div>
          <h1>
            {isUpdate ? "Alterar" : "Adicionar"} Personagem 
            {isUpdate ? <button onClick={handleDelete}>Deletar</button> : null }
          </h1>
          <input type="text" id='name' placeholder='Nome' value={personagem.name} onChange={handleChange} />
          <input type="text" id='species' placeholder='Espécie' value={personagem.species} onChange={handleChange} />
          <input type="text" id='image' placeholder='Url da Imagem' value={personagem.image} onChange={handleChange} />
          <input type="text" id='gender' placeholder='Gênero' value={personagem.gender} onChange={handleChange} />
          <input type="text" id='status' placeholder='Status' value={personagem.status} onChange={handleChange} />
          <div className='actions'>
            <button onClick={goBack}>Cancelar</button>
            <button className='primary' onClick={handleAddSave}>{isUpdate ? "Alterar" : "Salvar"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}
