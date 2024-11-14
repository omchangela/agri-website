import axios from 'axios';

export const loginUser = async (credentials) => {
  const response = await axios.post('/api/login', credentials);
  return response.data;
};

export const registerUser = async (details) => {
  const response = await axios.post('/api/register', details);
  return response.data;
};
