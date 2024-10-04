import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import { isTokenExpired } from '../utils/tokenUtils';
import { Link, useNavigate } from "react-router-dom";

const Home1 = () => {
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
                <div className="flex items-center min-h-screen bg-[#F19ED2]">
                    <div className="flex flex-col mx-auto">
                        <h1 className="text-white text-2xl">HAPPY BIRTH DAY MY PRINCESS!!!!</h1>
                        <img src="./HBD.gif" alt="" />
                    </div>
                    <Link to={'/home2'} className="me-3 text-2xl text-white hover:text-[#D63484]">Next</Link>
                </div>
        </>
    )
}

export default Home1;