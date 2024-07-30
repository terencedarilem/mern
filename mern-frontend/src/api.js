import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // Remplacez par l'URL de votre API

export const getData = async () => {
  try {
    const response = await axios.get(`${API_URL}/data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
