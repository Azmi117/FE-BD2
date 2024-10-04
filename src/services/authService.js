import axios from "axios";

const API_URL = 'https://apibd2-production-bc12.up.railway.app/api/auth'

export const loginUser = async (userData) => {
    try{
        const response = await axios.post(`${API_URL}/login`, {
            email:userData.email,
            password:userData.password
        });
        const { token } = response.data;
        localStorage.setItem('token', token);
        return response.data;
    }catch(error){
        console.error('Error logging in: ', error);
        throw error;
    }
}