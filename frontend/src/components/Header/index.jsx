import viteLogo from '../../../public/vite.svg'
import reactLogo from '../../assets/react.svg'
import { Link, useLocation } from 'react-router-dom';
import './styles.css'

export default function Header(){
    const location = useLocation();

    const isLoginRoute = location.pathname === '/login';

    return (
        <>
            <header>
                <h1>Minha Página React</h1>
                <img src={reactLogo} alt='Logo do React' />
                <img src={viteLogo} alt='Logo do Vite' />
                {
                    !isLoginRoute &&
                        <Link to="/login">Entrar</Link>
                }
            </header>
            {
            !isLoginRoute &&
                <nav className="menu">
                    <ul>
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/api">
                            <li>Rick And Morty API</li>
                        </Link>
                    </ul>
                </nav>
            }
        </>
    )
}