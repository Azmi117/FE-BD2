import React, {useEffect} from "react";
import Navbar from "../components/Navbar";
import { isTokenExpired } from '../utils/tokenUtils';
import { Link, useNavigate } from "react-router-dom";

const Home7 = () => {
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
                            <h1 className="text-white text-lg lg:text-2xl">Yaudah langsung aja ke games nya ya cantik ❤</h1>
                            <div className="flex flex-row mt-3">
                                <img src="olN.gif" alt="" className="w-60 mx-auto lg:w-96"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around lg:justify-evenly flex-row mt-7">
                        <div>
                            <Link to={'/home8'} className="ms-3 text-2xl text-white hover:text-[#D63484]">START!</Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Home7;