import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import Wheel from "../components/Wheel";
import { isTokenExpired } from '../utils/tokenUtils';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const tokenExpired = isTokenExpired(token);

    useEffect(() => {
        if (!token || tokenExpired) {
          navigate('/login');
        }
      }, [navigate, token, tokenExpired]);
    
      if (!token || tokenExpired) return null;

    return(
        <>
            <Navbar/>
            <div className="flex justify-center mt-5">
                <Wheel/>
            </div>
        </>
    )
}

export default Home;