import React, { useState, useEffect } from "react";
import DropzoneComponent from "../components/DropZone";
import { getMe, updateUser } from "../services/userService"; // Import getMe dan updateUser

const Profile = () => {
  // State untuk menyimpan data user
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState(null); // Akan diisi oleh DropZone atau getMe
  const [currentPhotoUrl, setCurrentPhotoUrl] = useState(""); // URL foto yang ditampilkan

  // Panggil getMe untuk mendapatkan data user saat komponen pertama kali dimuat
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getMe();
        setUsername(userData.username);
        setEmail(userData.email);
        setCurrentPhotoUrl(userData.photo); // URL foto dari API
      } catch (error) {
        console.error("Failed to fetch user data", error);
      }
    };

    fetchUserData(); // Panggil fungsi untuk mendapatkan data user
  }, []);

  // Handler untuk submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Mengumpulkan data untuk update
    const userData = {
      username,
      email,
      photo, // Foto baru dari DropZone jika ada
    };

    try {
      const updatedUser = await updateUser(userData);
      alert("User updated successfully!");
      console.log(updatedUser); // Respons dari API

      // Jika update berhasil, ganti URL foto yang ditampilkan
      if (userData.photo) {
        setCurrentPhotoUrl(URL.createObjectURL(userData.photo)); // Ganti foto dengan yang baru
      }
    } catch (error) {
      console.error("Failed to update user:", error);
      alert("Error updating user. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FF4191] flex justify-center">
      <div className="w-72 h-full bg-[#FFCBCB] rounded-xl mt-24 flex flex-col">
        <div className="flex justify-center">
          <img
            src={currentPhotoUrl || "https://via.placeholder.com/150"} // Foto dari API atau placeholder
            alt="User Profile"
            className="w-24 h-24 rounded-full relative -top-8"
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <div className="mx-auto">
              <label htmlFor="username">Username</label>
              <div className="flex flex-row">
                <img
                  src="https://www.svgrepo.com/show/521023/user-4.svg"
                  alt=""
                  className="w-9 h-9 bg-[#FF76CE]"
                />
                <input
                  type="text"
                  className="px-1"
                  id="username"
                  value={username} // Hubungkan state dengan input
                  onChange={(e) => setUsername(e.target.value)} // Update state saat input berubah
                />
              </div>
            </div>
            <div className="mx-auto mt-3">
              <label htmlFor="email">Email</label>
              <div className="flex flex-row">
                <img
                  src="https://www.svgrepo.com/show/452690/email.svg"
                  alt=""
                  className="w-9 h-9 bg-[#FF76CE]"
                />
                <input
                  type="email"
                  className="px-1"
                  id="email"
                  value={email} // Hubungkan state dengan input
                  onChange={(e) => setEmail(e.target.value)} // Update state saat input berubah
                />
              </div>
            </div>
            <div className="mx-auto mt-3">
              <label htmlFor="photo">Photo</label>
              <div className="flex flex-row mb-5">
                {/* Dropzone untuk mengganti file foto */}
                <DropzoneComponent onFileSelect={(file) => setPhoto(file)} /> {/* Update state photo */}
              </div>
            </div>
            <button type="submit" className="w-60 bg-[#FF4E88] mx-auto mb-8 rounded-sm text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
