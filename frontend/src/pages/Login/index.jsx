import { useContext, useState } from 'react';
import './styles.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context';

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  const handleCreateAccount = () => {
    navigate('/signup')
  }

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  // const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = JSON.stringify({ email, senha })
    const headers = { 'Content-Type': 'application/json' }
    const method = 'post'

    const responseApi = await fetch(
      'http://localhost:3000/api/v1/login',
      { method, headers, body }
    )
    if (!responseApi.ok) {
      throw new Error(`HTTP error! status: ${responseApi.status}`);
    }
    const response = await responseApi.json();

    if(response.token) {
      login(response.token)
      navigate('/')
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        {/* Seus campos de login aqui */}
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" required value={senha} onChange={(e) => setSenha(e.target.value)}/>
        </div>
        <p>Não possui conta? <spam className="signup" onClick={handleCreateAccount}>Cadastre-se</spam></p>
        <button className="button" type="submit" onClick={handleSubmit}>Entrar</button>
        <button className="button back-button" onClick={handleBackClick}>
          Voltar
        </button>
      </form>
    </div>
  );
}
