import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import RickAndMortyApi from './pages/RickAndMortyApi'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api" element={<RickAndMortyApi />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
