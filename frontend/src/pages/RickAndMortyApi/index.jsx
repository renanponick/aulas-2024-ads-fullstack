import { useEffect, useState } from 'react'
import './styles.css'
import Card from '../../components/Card'
import Filter from '../../components/Filter'
import Pagination from '../../components/Pagination'

export default function RickAndMortyApi() {
  const [ conteudo, setConteudo ] = useState(<></>)
  const [ busca, setBusca ] = useState('');
  const [ page, setPage ] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  async function carregarTodosPersonagens() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}${busca}`,
      requestOptions
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return { info: data.info, char: data.results, }
  }

  async function listaPersonagens() {
    const { char: todosPersonagens, info } = await carregarTodosPersonagens()
    setTotalPages(info.pages)

    return todosPersonagens.map(personagem =>
      <Card data={personagem} />
    )
  }

  useEffect(() => {
    async function getConteudo() {
      setConteudo(await listaPersonagens())
    }
    getConteudo()
  }, [page, busca])

  return (
    <div>
      <Filter busca={busca} setBusca={setBusca} />
      <div className='lista-principal'>
          { conteudo }
      </div>
      <Pagination 
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  )
}
