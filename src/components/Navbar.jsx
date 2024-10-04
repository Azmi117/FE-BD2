import React, { useEffect, useState } from "react";
import Box from "./Box";
import {jwtDecode} from "jwt-decode";
import { getMe } from "../services/userService";

const Navbar = ({children}) => {
    const [Boxy, setBoxy] = useState(false);
    const [userPhoto, setUserPhoto] = useState(null);

    const handleBox = () => {
        setBoxy(!Boxy);
    }

    useEffect(() =>{
        const fetchUserData = async () => {
            try{
                const token = localStorage.getItem('token');
                if(token) {
                    const decodeToken = jwtDecode(token);
                    const userId = decodeToken.id;
                    const user = await getMe(userId);
                    setUserPhoto(user.photo);
                }
            }catch(error){
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    return(
        <>
            <nav className="w-full h-[3rem] bg-[#FF3EA5] flex items-center justify-between">
                <div className="ms-5">
                    <h1 className="text-white edu-au-vic-wa-nt-dots-regular">Happy Birth Day</h1>
                </div>
                <div className="me-7">
                    <button onClick={handleBox}>
                        <img src={userPhoto} alt="" className="w-8 h-8 rounded-full"/>
                    </button>
                    {Boxy && (
                        <Box/>
                    )}
                </div>
                {children}
            </nav>
        </>
    )
}

export default Navbar;