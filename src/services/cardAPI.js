import axios from 'axios';

axios.defaults.baseURL = 'https://633d710af2b0e623dc73e57a.mockapi.io/api/v1';

export const getCards = async () => {
  const response = await axios.get(`/cards`);
  return response.data;
};

export const addCard = async card => {
  const response = await axios.post('/cards', card);
  return response.data;
};

export const deleteCard = async id => {
  const response = await axios.delete(`/cards/${id}`);
  return response.data;
};

export const editCard = async (id, data) => {
  const response = await axios.put(`/cards/${id}`, data);
  return response.data;
};
