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
    
    const result = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}${busca}`,
      requestOptions
    )
      .then(response => response.text())
      .then(result => { return result })
      .catch(error => console.log('error', error));
    const response = JSON.parse(result)

    return { info: response.info, char: response.results, }
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
