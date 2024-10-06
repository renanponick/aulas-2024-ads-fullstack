import api from './api';

// 3 - Criar funções para consumir a API

export const getCharacters = async (page = 1) => {
  const response = await api.get('/api/v1/character', {
    params: {
      page: page,
    }
  });
  return response.data;
};

export const getCharacterById = async (id) => {
  const response = await api.get(`/api/v1/character/${id}`);
  return response.data;
};

export const createCharacter = async (character) => {
  const response = await api.post('/api/v1/character', character);
  return response.data;
};

export const updateCharacter = async (id, character) => {
  const response = await api.put(`/api/v1/character/${id}`, character);
  return response.data;
};

export const deleteCharacter = async (id) => {
  return api.delete(`/api/v1/character/${id}`);
};