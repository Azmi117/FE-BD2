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

  export const updateUser = async (userData) => {
    try {
      const token = localStorage.getItem('token');
      if(!token) throw new Error('No token found');

      const formData = new FormData();
      formData.append('username', userData.username);
      formData.append('email', userData.email);
      if (userData.photo) {
        formData.append('photo', userData.photo);
      }
  
      const response = await axios.put(`${API_URL}/update/me`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
  
      return response.data;
    } catch (error) {
      throw new Error('Failed to update user data');
    }
  };