import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../auth/Context';

// 5 - Adicionar PrivateRoute
const PrivateRoute = () => {
  const { token } = useContext(AuthContext);

  if (token === null) {
    return <Navigate to="/login" />;
  }

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
