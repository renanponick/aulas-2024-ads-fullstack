import { useState } from 'react'
import './styles.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { createCharacter, updateCharacter, deleteCharacter } from '../../api/character';

const icon = "https://freesvg.org/img/abstract-user-flat-1.png"

export default function Character() {
  const location = useLocation();
  const { isUpdate, personagem: char } = location.state || {}
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
    try{
      if(isUpdate) {
        const apiResponse = await updateCharacter(personagem.id ,personagem)

        if(apiResponse.id){
          navigate('/api')
          return
        }
      } else {
        const apiResponse = await createCharacter(personagem)
  
        if(apiResponse.id){
          navigate('/api')
          return
        }
      }
    } catch (error) {
      if (error.status === 403) {
        toast("Sem permissão.");
      }
      if (error.status === 401 || error.status === 404) {
        toast('Email ou senha inválido, tente novamente!');
      }
      navigate('/api')
      return
    }
  }

  const handleDelete = async () => {
    try {
      const response = prompt('Para deletar digite o nome do personagem')
      if(response === personagem.name) {
        const apiResponse = await deleteCharacter(personagem.id)

        if(apiResponse.status === 204){
          navigate('/api')
        }
      } else {
        toast("Nome Inválido, processo cancelado.");
      }
    } catch (error) {
      if (error.status === 403) {
        return toast("Sem permissão.");
      }
      if (error.status === 401 || error.status === 404) {
        return toast('Email ou senha inválido, tente novamente!');
      }
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
