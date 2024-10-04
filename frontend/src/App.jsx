import Header from './components/Header'
import Footer from './components/Footer'
import RickAndMortyApi from './pages/RickAndMortyApi'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login'
import { AuthProvider } from './auth/Context'
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Character from './pages/Character';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<PrivateRoute />}>
            <Route path="/api" element={<RickAndMortyApi />} />
            <Route path="/character" element={<Character />} /> {/* ajustar essa rota*/}
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ width: '50%' }}
      />
      <Footer />
    </AuthProvider>
  )
}

export default App
