import axios from "axios";

const API_URL = 'https://apibd2-production-bc12.up.railway.app/api/user';

export const getMe = async (id) => {
    try{
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');
      
        const response = await axios.get(`${API_URL}/me`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response.data;
    }catch(error){
        console.error('Error fetching data user: ', error);
        throw error;
    }
  };