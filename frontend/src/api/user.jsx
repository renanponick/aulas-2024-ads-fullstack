import api from './api';

// Função para obter todos os usuários
export const getUsers = async () => {
  const response = await api.get('/api/v1/users');
  return response.data;
};

// Função para obter um único usuário
export const getUserById = async (id) => {
  const response = await api.get(`/api/v1/user/${id}`);
  return response.data;
};

// Função para criar um novo usuário
export const createUser = async (user) => {
  const response = await api.post('/api/v1/user', user);
  return response.data;
};

// Função para atualizar um usuário
export const updateUser = async (id, user) => {
  const response = await api.put(`/api/v1/user/${id}`, user);
  return response.data;
};

// Função para deletar um usuário
export const deleteUser = async (id) => {
  await api.delete(`/api/v1/user/${id}`);
};

export const loginUser = async (email, senha) => {
  const body = { email, senha };
  const response = await api.post('/api/v1/login', body, {
      headers: { 'Content-Type': 'application/json' },
  });
  return response.data;

};