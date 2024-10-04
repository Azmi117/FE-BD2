import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import useStore from "../store/store";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setToken, setUser } = useStore();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser({ email, password });
            console.log('Login response:', response); // Log response
            const token = response.token; // Periksa jika token ada
            if (token) {
                setToken(token);
                navigate('/');
            } else {
                alert('Token not found');
            }
        } catch (error) {
            console.error('Login error:', error); // Log error
            alert('Login error');
        }
    };

    return(
        <>
        <div className="w-screen min-h-screen bg-[#EF5A6F] flex justify-center items-center overflow-x-hidden">
            <div className="w-72 bg-[#FFF1DB] shadow-md rounded-md">
                <div>
                    <h1 className="relative left-32 text-slate text-xl text-[#C75B7A] py-2 pacifico-regular">Login</h1>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="flex justify-center p-2">
                        <div className="bg-[#D4BDAC]">
                            <img src="https://www.svgrepo.com/show/494757/email.svg" alt="" className="w-8 h-8"/>
                        </div>
                        <input 
                            type="email"
                            className="px-1"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center p-2">
                        <div className="bg-[#D4BDAC]">
                            <img src="https://www.svgrepo.com/show/517588/lock.svg" alt="" className="w-8 h-8"/>
                        </div>
                        <input 
                            type="password" 
                            className="px-1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center py-5 bg-">
                        <button type="submit" className="w-56 bg-[#C75B7A] text-white hover:text-gray-300 rounded-md">Login</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default Login;