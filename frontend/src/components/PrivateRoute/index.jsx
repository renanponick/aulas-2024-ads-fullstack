import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Context';

const PrivateRoute = () => {
  const { token } = useContext(AuthContext);

  // Se estiver autenticado, renderiza o componente desejado, caso contrário, redireciona para o login
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
