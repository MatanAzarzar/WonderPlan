import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Update this URL to your backend server

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/signin`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
