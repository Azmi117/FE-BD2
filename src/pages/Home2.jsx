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
                <div className="flex flex-col min-h-screen bg-[#F19ED2]">
                    <div className="w-full flex justify-between mt-32">
                        <div className="flex flex-col mx-auto">
                            <h1 className="text-white ms-5 lg:ms-0 text-2xl">AKHIRNYA AKU BISA NGERAYAIN ULANG TAHUN KAMU WKWKWK</h1>
                            <img src="./oD.gif" alt="" className="lg:w-80 h-80 mx-auto"/>
                        </div>
                    </div>
                    <div className="flex justify-around lg:justify-evenly flex-row mt-7">
                        <div>
                            <Link to={'/'} className="ms-3 text-2xl text-white hover:text-[#D63484]">Prev</Link>
                        </div>
                        <div>
                            <Link to={'/home3'} className="me-3 text-2xl text-white hover:text-[#D63484]">Next</Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Home2;