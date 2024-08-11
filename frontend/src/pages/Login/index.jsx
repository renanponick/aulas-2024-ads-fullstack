import { useState } from 'react';
import './styles.css'
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Volta para a página anterior
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulação de autenticação básica
    if (username === 'admin' && password === 'password') {
      alert('Login bem-sucedido!');
      setError('');
    } else {
      setError('Nome de usuário ou senha incorretos');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        {/* Seus campos de login aqui */}
        <div className="input-group">
          <label htmlFor="username">Nome de Usuário:</label>
          <input type="text" id="username" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" required />
        </div>
        <button type="submit">Entrar</button>
      <button className="back-button" onClick={handleBackClick}>
        Voltar
      </button>
      </form>
    </div>
  );
}
