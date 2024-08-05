import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import Filter from './components/Filter'

function App() {
  const [ conteudo, setConteudo ] = useState(<></>)
  const [ busca, setBusca ] = useState('');

  async function carregarTodosPersonagens() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    const result = await fetch(
      "https://rickandmortyapi.com/api/character"+busca,
      requestOptions
    )
      .then(response => response.text())
      .then(result => { return result })
      .catch(error => console.log('error', error));

    const char = JSON.parse(result)

    return char.results
  }

  async function listaPersonagens() {
    const todosPersonagens = await carregarTodosPersonagens()

    return todosPersonagens.map(personagem =>
      <Card data={personagem} />
    )
  }

  useEffect(() => {
    async function getConteudo() {
      setConteudo(await listaPersonagens())
    }
    getConteudo()
  }, [busca])

  return (
    <>
      <Header />
      <main>
        <Filter busca={busca} setBusca={setBusca} />
        <div className='lista-principal'>
          { conteudo }
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
