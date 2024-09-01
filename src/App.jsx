import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [ conteudo, setConteudo ] = useState(<></>)

  // DESAFIO
  function getGenero(genero) {
    switch (genero) {
      case 'Male':
        return 'Masculino'
      case 'Female':
        return 'Feminino'
      case 'unknown':
        return 'Desconhecido'
      case 'Genderless':
        return 'Sem Gênero'
      default:
        return genero
    }
  }

  function getStatus(status) {
    switch (status) {
      case 'Alive':
        return 'Vivo'
      case 'Dead':
        return 'Morto'
      case 'unknown':
        return 'Desconhecido'
      default:
        return status
    }
  }

  function getEspecie(especie) {
    switch (especie) {
      case 'Alien':
        return 'Alienígena'
      case 'Human':
        return 'Humano'
      case 'Robot':
        return 'Robo'
      case 'Disease':
        return 'Doença'
      case 'Humanoid':
        return 'Humanoide'
      case 'unknown':
        return 'Desconhecido'
      case 'Mythological Creature':
        return 'Criatura Mitológica'
      default:
        return especie
    }
  }

    // 3 - Explicar o FETCH
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

    return data.results
  }

  async function listaPersonagens() {
    const todosPersonagens = await carregarTodosPersonagens()

    // 1 Corrigir lista de personagem
    return todosPersonagens.map(personagem =>
      <div className='card char' key={personagem.id}>
        <img src={personagem.image} alt={personagem.name}/>

        <h2>{personagem.name}</h2>

        <div className='char-info'>
          <span><b>Espécie: </b>{getEspecie(personagem.species)}</span>
          <span><b>Gênero: </b>{getGenero(personagem.gender)}</span>
        </div>

        <div>
          <div className='lista-secundaria'>
            <b>Participações:</b>
            {/* 4 - DESAFIO */ }
            { personagem.episode.map(
              ep => 
                  <span key={personagem.name+(ep.split('episode/'))[1]}>
                    Ep-{ (ep.split('episode/'))[1] }
                  </span>
            ) }
          </div>
          <h5><b>Status: </b> {getStatus(personagem.status)}</h5>
        </div>
      </div>
    )
  }

  useEffect(() => {
    async function getConteudo() {
      setConteudo(await listaPersonagens())
    }
    getConteudo()
  }, [])

  return (
    <>
      <Header />
      <main>
        {/* 2 - Colocar os filtros aqui */}
        <div className='filtros'>
          <span className='filtros-titulo'>Filtros</span>
          <div className='filtro status'>
            <b>Status:</b>
            <span>Vivo</span>
            <span>Morto</span>
            <span>Desconhecido</span>
          </div>
          <div className='filtro genero'>
            <b>Genero:</b>
            <span>Masculino</span>
            <span>Feminino</span>
            <span>Sem Gênero</span>
            <span>Desconhecido</span>
          </div>
        </div>
        <div className='lista-principal'>
          { conteudo }
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
