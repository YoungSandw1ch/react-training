import axios from 'axios';

axios.defaults.baseURL = 'https://633d710af2b0e623dc73e57a.mockapi.io/api/v1';

const getCards = async () => {
  const response = await axios.get(`/cards`);
  return response.data;
};

const addCard = async card => {
  const response = await axios.post('/cards', card);
  return response.data;
};

const deleteCard = async id => {
  const response = await axios.delete(`/cards/${id}`);
  return response.data;
};

const editCard = async (id, value) => {
  const card = await axios(`/cards/${id}`);
  const itemCount = card.data.count + value;
  if (itemCount > 0) {
    const response = await axios.put(`/cards/${id}`, { count: itemCount });
    return response.data;
  }
  return card.data;
};

const cardAPI = {
  get: getCards,
  add: addCard,
  delete: deleteCard,
  edit: editCard,
};

export default cardAPI;
