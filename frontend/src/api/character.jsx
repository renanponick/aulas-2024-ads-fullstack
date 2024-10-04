import api from './api';

// Função para obter todos os usuários
export const getCharacters = async (page = 1) => {
  const response = await api.get('/api/v1/character', {
    params: {
      page: page,
    }
  });
  return response.data;
};

// Função para obter um único usuário
export const getCharacterById = async (id) => {
  const response = await api.get(`/api/v1/character/${id}`);
  return response.data;
};

// Função para criar um novo usuário
export const createCharacter = async (character) => {
  const response = await api.post('/api/v1/character', character);
  return response.data;
};

// Função para atualizar um usuário
export const updateCharacter = async (id, character) => {
  const response = await api.put(`/api/v1/character/${id}`, character);
  return response.data;
};

// Função para deletar um usuário
export const deleteCharacter = async (id) => {
  await api.delete(`/api/v1/character/${id}`);
};