import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import { isTokenExpired } from '../utils/tokenUtils';
import { Link, useNavigate } from "react-router-dom";

const Home2 = () => {
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
                <div className="flex min-h-screen bg-[#F19ED2]">
                    <div className="w-screen flex justify-between mt-32">
                        <div className="my-40">
                            <Link to={'/'} className="ms-3 text-2xl text-white hover:text-[#D63484]">Prev</Link>
                        </div>
                        <div className="flex flex-col mx-auto">
                            <h1 className="text-white text-2xl">AKU SENENG BANGET BISA NGERAYAIN ULANG TAHUN KAMU CANTIK</h1>
                            <img src="./Mable.gif" alt=""/>
                        </div>
                        <div className="my-40">
                            <Link to={'/home2'} className="me-3 text-2xl text-white hover:text-[#D63484]">Next</Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Home2;