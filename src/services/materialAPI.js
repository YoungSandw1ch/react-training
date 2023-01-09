import axios from 'axios';

axios.defaults.baseURL = 'https://633d710af2b0e623dc73e57a.mockapi.io/api/v1/';
// const RESOURSE = 'materials';

export const AddMaterial = async value => {
  const response = await axios.post('materials', value);
  return response.data;
};

export const GetMaterials = async () => {
  const response = await axios.get('materials');
  return response.data;
};

export const DeleteMaterial = async id => {
  const response = await axios.delete(`materials/${id}`);
  return response.data;
};

export const EditMaterial = async (id, fields) => {
  const response = await axios.put(`materials/${id}`, fields);
  return response.data;
};
