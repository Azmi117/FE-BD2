import React, { useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import { createGift } from '../services/giftService';

// Data hadiah tetap sebagai angka
const data = [
  { option: '0' },
  { option: '1' },
  { option: '2' },
];

// Peta hadiah
const giftMapping = {
  0: 'Bunga',
  1: 'Softcase',
  2: 'Baju',
};

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [message, setMessage] = useState(''); // state untuk pesan hadiah

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setMessage(''); // reset pesan saat spin dimulai
    }
  };

  const sendGiftData = async (prizeNumber) => {
    try {
        const prizeOption = giftMapping[prizeNumber]; // Mendapatkan hadiah berdasarkan index
        const params = { varian: prizeOption }; // Menggunakan 'varian' untuk menyimpan nama hadiah
        await createGift(params); // Kirim hadiah yang terpilih ke server
        console.log('Gift sent successfully!');
    } catch (error) {
        console.error('Error sending gift:', error);
    }
};


  return (
    <>
      <div className='mt-40'>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
            const selectedPrizeNumber = prizeNumber; // Mendapatkan index hadiah yang dipilih
            setMessage(`Selamat kamu mendapat hadiah nomor ${selectedPrizeNumber}!`);

            // Kirim hadiah yang terpilih ke server secara otomatis
            sendGiftData(selectedPrizeNumber);
          }}
        />
        <div className='flex flex-col mt-3'>
          <div className='flex justify-center'>
            <button onClick={handleSpinClick} className='ms-2 bg-red-500 h-10 px-3 rounded-md text-white'>SPIN</button>
          </div>
          <div className='mt-3 flex justify-center'>
            <p style={{ minHeight: '24px' }}>
              {message}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
