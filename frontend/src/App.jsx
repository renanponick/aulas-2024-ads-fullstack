import Header from './components/Header'
import Footer from './components/Footer'
import RickAndMortyApi from './pages/RickAndMortyApi'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import { AuthProvider } from './Context'
import PrivateRoute from './components/PrivateRoute'
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Character from './pages/Character';

function App() {
  return (
    <AuthProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/api" element={<RickAndMortyApi />} />
            <Route path="/character" element={<Character />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      <Footer />
    </AuthProvider>
  )
}

export default App
