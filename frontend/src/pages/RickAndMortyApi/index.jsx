import { useContext, useEffect, useState } from 'react'
import './styles.css'
import Card from '../../components/Card'
import Pagination from '../../components/Pagination'
import AddButton from '../../components/AddButton'
import { useNavigate } from 'react-router-dom'
import { getCharacters } from '../../api/character'
import { AuthContext } from '../../auth/Context'

// 9 - Ajustar Roles
export default function RickAndMortyApi() {
  const { role } = useContext(AuthContext);
  const [ conteudo, setConteudo ] = useState(<></>)
  const [ page, setPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);
  const navigate = useNavigate();

  const handleAddClick = () => {
    navigate('/character')
  }

  async function carregarTodosPersonagens() {
    const data = await getCharacters(page)

    return { info: data.info, char: data.results, }
  }

  async function listaPersonagens() {
    const { char: todosPersonagens, info } = await carregarTodosPersonagens()
    setTotalPages(info.pages)

    return todosPersonagens.map(personagem =>{
      return <Card
        key={personagem.id}
        data={personagem}
        editable={role === 'admin'}
        onClick={
          role === 'admin' 
            ? () => navigate('/character', { state: { isUpdate: true, personagem } })
            : () => {}
        }
      />
    })
  }

  useEffect(() => {
    async function getConteudo() {
      setConteudo(await listaPersonagens())
    }
    getConteudo()
  }, [page])

  return (
    <div>
      <div className='lista-principal'>
          { conteudo }
      </div>
      { role === 'admin' ? <AddButton onClick={handleAddClick} /> : null }
      <Pagination 
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  )
}


