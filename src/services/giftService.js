import axios from "axios";

const API_URL = 'https://apibd2-production-bc12.up.railway.app/api/gift';

export const createGift = async (params) => {
    try {
        const token = localStorage.getItem('token');
        if (!token) throw new Error('No token found');

        const response = await axios.post(`${API_URL}/create`, params, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error create todo : ', error);
        throw error;
    }
}