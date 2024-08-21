import Header from './components/Header'
import Footer from './components/Footer'
import RickAndMortyApi from './pages/RickAndMortyApi'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import { AuthProvider } from './Context'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <AuthProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/api" element={<RickAndMortyApi />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      <Footer />
    </AuthProvider>
  )
}

export default App
