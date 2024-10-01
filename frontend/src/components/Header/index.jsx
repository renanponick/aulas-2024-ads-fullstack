import viteLogo from '../../../public/vite.svg'
import reactLogo from '../../assets/react.svg'
import { Link, useLocation } from 'react-router-dom';
import './styles.css'
import { AuthContext } from '../../auth/Context';
import { useContext } from 'react';
import LogoutButton from '../Logout';

export default function Header(){
    const { token } = useContext(AuthContext);
    const location = useLocation();

    const isLoginRoute = location.pathname === '/login';

    return (
        <div>
            <header>
                <h1>Minha Página React</h1>
                <img src={reactLogo} alt='Logo do React' />
                <img src={viteLogo} alt='Logo do Vite' />
                {
                    !isLoginRoute && !token
                        ? <Link to="/login">Entrar</Link>
                        : null
                }
                { token && <LogoutButton /> }
            </header>
            {
            !isLoginRoute &&
                <nav className="menu">
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        { token && <Link to="/api">
                            <li>Rick And Morty API</li>
                        </Link> }
                        {/* { token && <Link to="/profile">
                            <li>Favoritos</li>
                        </Link> } */}
                        { token && <Link to="/profile">
                            <li>Seu Perfil</li>
                        </Link> }
                    </ul>
                </nav>
            }
        </div>
    )
}