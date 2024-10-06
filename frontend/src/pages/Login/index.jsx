import { useContext, useState } from 'react';
import './styles.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/Context';
import { loginUser } from '../../api/user';
import { toast } from 'react-toastify';

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !senha) {
        return toast('Informe o e-mail e a senha para continuar!');
    }

    try {
        // 7 - Usar Axios para fazer a requisição de login
        const response = await loginUser(email, senha);
        if (response.token) {
            // 8 - Adicionar login ao AuthContext
            login(response.token);
            return navigate('/');
        }
    } catch (error) {
        if (error.response.status === 403) {
          return toast("Sem permissão.");
        }
        if (error.response.status === 401 || error.response.status === 404) {
          return toast('Email ou senha inválido, tente novamente!');
        }
        return toast('Erro inesperado, tente novamente mais tarde!');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
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
