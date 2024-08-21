import { useContext } from 'react';
import { AuthContext } from '../../Context';
import './styles.css'

export default function LogoutButton() {
  const { logout } = useContext(AuthContext);

  return <button onClick={logout}>Logout</button>;
}
