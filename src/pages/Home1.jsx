import React, { useEffect } from "react";
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

    return (
        <>
            <Navbar />
            <div className="flex items-center min-h-screen bg-[#F19ED2]">
                <div className="flex flex-col items-center mx-auto">
                    <h1 className="text-white text-2xl">HAPPY BIRTH DAY MY PRINCESS!!!!</h1>
                    {/* Ukuran gambar lebih kecil di mobile dan lebih besar di desktop */}
                    <img src="./HBD.gif" alt="" className="w-1/2 md:w-full lg:w-1/2 h-auto" />
                    <Link to={'/home2'} className="text-2xl text-white hover:text-[#D63484] mt-4">Next</Link>
                </div>
            </div>
        </>
    );
}

export default Home1;
